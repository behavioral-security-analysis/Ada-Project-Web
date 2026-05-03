(function () {
  // ------------------ Sticky nav state ------------------
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ------------------ Mobile menu ------------------
  const burger = document.getElementById("nav-burger");
  const links = document.getElementById("nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      links.classList.toggle("is-open");
      burger.classList.toggle("is-open");
    });
    links.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        burger.classList.remove("is-open");
      }
    });
  }

  // ------------------ Reveal-on-scroll ------------------
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  // ------------------ Animated counters ------------------
  function animateCounter(el) {
    const target = parseFloat(el.getAttribute("data-count"));
    if (isNaN(target)) return;
    const duration = 1400;
    const start = performance.now();
    const isFloat = !Number.isInteger(target);
    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = target * eased;
      el.textContent = isFloat ? value.toFixed(1) : Math.round(value);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => obs.observe(c));
  }
  document.addEventListener("i18n:rendered", initCounters);

  // ------------------ Hero canvas (radar grid) ------------------
  const canvas = document.getElementById("hero-canvas");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let dots = [];
    let sweepAngle = 0;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedDots();
    }

    function seedDots() {
      dots = [];
      const density = Math.floor((w * h) / 18000);
      for (let i = 0; i < density; i++) {
        dots.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.4 + 0.2,
          a: Math.random() * 0.4 + 0.1,
          tw: Math.random() * 0.02 + 0.005,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    function drawGrid() {
      ctx.save();
      ctx.strokeStyle = "rgba(91, 141, 239, 0.06)";
      ctx.lineWidth = 1;
      const gap = 60;
      for (let x = 0; x < w; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawDots(t) {
      ctx.save();
      dots.forEach((d) => {
        const a = d.a + Math.sin(t * d.tw + d.phase) * 0.15;
        ctx.fillStyle = `rgba(91, 141, 239, ${Math.max(0.05, a)})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }

    function drawSweep() {
      const cx = w * 0.78;
      const cy = h * 0.55;
      const radius = Math.max(w, h) * 0.55;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      grad.addColorStop(0, "rgba(61, 111, 204, 0.18)");
      grad.addColorStop(0.6, "rgba(61, 111, 204, 0.04)");
      grad.addColorStop(1, "rgba(61, 111, 204, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, sweepAngle, sweepAngle + 0.55);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = "rgba(61, 111, 204, 0.18)";
      ctx.lineWidth = 1;
      [0.25, 0.45, 0.75, 1.05].forEach((mult) => {
        ctx.beginPath();
        ctx.arc(cx, cy, radius * mult * 0.5, 0, Math.PI * 2);
        ctx.stroke();
      });
    }

    function frame(t) {
      ctx.clearRect(0, 0, w, h);
      drawGrid();
      drawDots(t * 0.05);
      drawSweep();
      sweepAngle += 0.004;
      requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(frame);
  }

  // ------------------ Smooth anchor scroll (offset for sticky nav) ------------------
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const navH = nav ? nav.offsetHeight : 0;
    const y = target.getBoundingClientRect().top + window.scrollY - navH + 1;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
})();
