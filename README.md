# Ada Project — Tanıtım Sitesi

> OSTİMTECH Ar-Ge ve İnovasyon Proje Pazarı II için hazırlanan portfolyo tarzı tanıtım sayfası.
> Proje: **Derin Öğrenme Tabanlı Gerçek Zamanlı Güvenlik İzleme Sistemi**

Saf HTML + CSS + Vanilla JS. Build adımı yok. Doğrudan açılır, doğrudan deploy edilir.

---

## Yerel Önizleme

### Seçenek 1 — Doğrudan tarayıcıda

`index.html` dosyasına çift tıkla. Bütün özellikler `file://` üzerinden çalışır.

### Seçenek 2 — Lokal sunucu (önerilen)

```bash
# Python varsa
python -m http.server 8000

# veya Node varsa
npx serve .
```

Sonra: <http://localhost:8000>

---

## Yapı

```
ada-proje-web/
├── index.html              # Tüm bölümler tek sayfada
├── css/style.css           # Tüm stiller
├── js/
│   ├── locales.js          # TR + EN içerik (tek dosya)
│   ├── i18n.js             # Dil değiştirme + dinamik render
│   └── main.js             # Scroll, sayaçlar, hero canvas
└── assets/
    ├── icons/favicon.svg
    ├── images/             # Ekran görüntüleri buraya
    └── videos/             # Demo videosu buraya
```

---

## İçerik Düzenleme

Tüm metinler tek bir yerde: **`js/locales.js`**.

```js
window.LOCALES = {
  tr: { hero: { title: "...", slogan: "..." }, ... },
  en: { hero: { title: "...", slogan: "..." }, ... }
};
```

- TR ve EN paralel ağaç. Bir tarafta yeni alan eklersen diğerinde de eklemen gerekir.
- Yeni metin eklemek istersen HTML tarafında `data-i18n="bolum.alan"` özniteliğini kullan.
- Kart, listeleme veya dinamik içerik için `js/i18n.js` içindeki render fonksiyonlarına bak.

---

## Demo Videosu / Görsel Ekleme

Kodda `DEMO_PLACEHOLDER` ve `QR_PLACEHOLDER` yorumlarını arat — yapılacak değişiklik açıklamalarıyla birlikte yazılı:

```bash
grep -rn "DEMO_PLACEHOLDER\|QR_PLACEHOLDER" .
```

### Video
1. `assets/videos/demo.mp4` dosyasını koy
2. `assets/images/demo-poster.jpg` (kapak karesi) koy
3. `index.html` içinde `<div class="demo-video__placeholder">…</div>` bloğunu yorumda yazılı `<video>` etiketiyle değiştir

### Ekran Görüntüleri
1. `assets/images/dashboard.png`, `alarm.png`, `replay.png` dosyalarını koy
2. `js/i18n.js` içinde `renderScreenshots` fonksiyonundaki `<div class="screenshot__placeholder">` bloğunu `<img src="assets/images/dashboard.png" alt="..." />` ile değiştir

### QR Kod
1. Final URL belirlendiğinde (örn. `https://ada-proje.netlify.app`)
2. <https://www.qr-code-generator.com/> üzerinden PNG üret
3. `assets/images/qr.png` olarak kaydet
4. `index.html` içindeki `<div class="qr-box">QR</div>` bloğunu `<img src="assets/images/qr.png" alt="QR" class="qr-box" />` ile değiştir

---

## Renk / Tasarım Değişikliği

`css/style.css` dosyasının başındaki `:root` bloğu tek değişiklik noktasıdır:

```css
:root {
  --bg: #07101F;
  --accent: #3D6FCC;
  --accent-2: #5B8DEF;
  --lvl-high: #FB923C;
  ...
}
```

---

## Deploy

### Netlify (en kolay)
1. <https://app.netlify.com> → "Add new site" → "Deploy manually"
2. Bu klasörü sürükle-bırak
3. URL hazır: `https://<ad>.netlify.app`
4. Site settings → Domain → istediğin alt-domain'e değiştirebilirsin

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial site"
gh repo create ada-proje-web --public --source . --push
# Sonra GitHub Settings → Pages → main branch → / (root)
```

### Vercel
```bash
npx vercel
```

---

## Tarayıcı Desteği

Modern tarayıcılar (Chrome, Edge, Firefox, Safari son 2 sürüm). IE desteği yok.

---

## Lisans

Sitenin kendisi MIT. Proje konusu için ana repoya bakın.
