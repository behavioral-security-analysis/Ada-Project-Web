window.LOCALES = {
  tr: {
    meta: {
      title: "Ada Projesi — Derin Öğrenme Tabanlı Güvenlik İzleme",
      description: "Kamera ve İHA görüntülerinden 5 şüpheli davranışı gerçek zamanlı tespit eden açık kaynaklı yapay zeka güvenlik sistemi."
    },
    nav: {
      home: "Anasayfa",
      problem: "Problem",
      architecture: "Mimari",
      behaviors: "Davranışlar",
      threat: "Tehdit Skoru",
      tech: "Teknoloji",
      performance: "Performans",
      privacy: "KVKK",
      demo: "Demo",
      team: "Ekip",
      contact: "İletişim"
    },
    hero: {
      tag: "OSTİMTECH Ar-Ge ve İnovasyon Proje Pazarı II",
      title: "Derin Öğrenme Tabanlı Gerçek Zamanlı Güvenlik İzleme Sistemi",
      slogan: "Olaydan sonra değil, olay anında tespit.",
      description: "Güvenlik kameraları ve İHA görüntülerinden şüpheli davranışları gerçek zamanlı tespit eden açık kaynaklı, KVKK uyumlu hibrit yapay zekâ çözümü.",
      cta_primary: "GitHub Reposu",
      cta_secondary: "Demoyu İzle",
      cta_tertiary: "Mimariyi İncele",
      badges: ["Gerçek Zamanlı", "İHA + CCTV", "Hibrit AI", "KVKK Uyumlu"]
    },
    problem: {
      title: "Problem",
      kicker: "Geleneksel güvenlik izleme yetersiz kalıyor",
      intro: "Bugünün CCTV altyapıları olayları kayıt altına alır ama anlamaz. İnsan operatörlere bırakılan dikkat süresi 20 dakika sonra düşer; bir operatörün düzinelerce ekrandan anormal davranışı yakalaması neredeyse imkânsızdır.",
      points: [
        { title: "Reaktif İzleme", desc: "Olaylar gerçekleştikten sonra geri sarılarak tespit edilir; önleme şansı kaybedilir." },
        { title: "Operatör Yorgunluğu", desc: "20 dakikadan sonra dikkat keskinliği %95 düşer (Sandia Lab raporu)." },
        { title: "Ölçeklenemeyen İzleme", desc: "1000 kameralı bir tesiste yalnızca birkaç ekran aynı anda izlenebilir." },
        { title: "Geç Alarm Maliyeti", desc: "Şüpheli davranıştan müdahaleye geçen her saniye olayın etkisini büyütür." }
      ]
    },
    architecture: {
      title: "Sistem Mimarisi",
      kicker: "Görüntüden karara dört aşamalı boru hattı",
      intro: "Sistem, video akışını dört aşamalı bir boru hattından geçirir. Her aşama bir sonrakini zenginleştirir; nihayetinde her nesne için bir tehdit skoru ve sınıfı üretilir.",
      hint: "Aşamaların üzerine gelerek detayları görüntüleyebilirsiniz.",
      stages: [
        {
          name: "Video Girişi",
          short: "CCTV / İHA / Test Videosu",
          long: "RTSP, IP stream veya dosya tabanlı kaynaklar desteklenir. Drone modunda ego-motion kompanzasyonu için ek bir homografi katmanı devreye girer."
        },
        {
          name: "YOLOv8 Detector",
          short: "COCO + VisDrone fine-tune",
          long: "Her karede nesneler tespit edilir. Bounding box, sınıf ve güven skoru üretilir. CPU üzerinde 15+ FPS hedeflenir."
        },
        {
          name: "ByteTrack Tracker",
          short: "track_id · trajektori · dwell_time",
          long: "Düşük güven skorlu tespitleri de değerlendirir, ID switch oranını minimize eder. İHA modunda Kalman state'leri ego-motion ile güncellenir."
        },
        {
          name: "Behavioral Reasoning Engine",
          short: "Hibrit: %60 MLP + %40 Kural",
          long: "10 boyutlu özellik vektörü hesaplanır. PyTorch MLP (10 → 32 → 16 → 4) tehdit sınıfını üretir; kural katmanı güvenlik ağı görevi görür."
        },
        {
          name: "Streamlit Dashboard",
          short: "Canlı + Replay · JSON Alert",
          long: "Operatöre canlı görüntü, alarmlar, ısı haritası ve replay modu sunulur. Tüm alarmlar JSON olarak kaydedilir; e-posta/Telegram entegrasyonu opsiyoneldir."
        }
      ]
    },
    behaviors: {
      title: "Tespit Edilen Davranışlar",
      kicker: "5 kritik şüpheli örüntü",
      intro: "Sistem, tek bir tehlikeli olay tipine değil, suç ve güvenlik literatüründen damıtılmış beş davranış kalıbına bakar.",
      cards: [
        {
          name: "Bölge İhlali",
          level: "HIGH",
          trigger: "Kişi veya araç yasak bölgeye girdiğinde",
          desc: "Operatör tarafından tanımlanan poligon bölgelerine giriş anında alarm üretilir. Drone modunda bölgeler ego-motion ile yeryüzüne sabitlenir."
        },
        {
          name: "Anormal Bekleme",
          level: "MEDIUM",
          trigger: "60 saniyeden uzun süre aynı konumda kalma",
          desc: "Kapı önü, gişe, ATM gibi alanlarda anormal süreyle bekleyen kişiler işaretlenir. Kalabalık etkisi normalize edilir."
        },
        {
          name: "Terk Edilmiş Nesne",
          level: "HIGH",
          trigger: "Çanta/bavul sahibinden 90 piksel uzaklaşıp 10 saniye sabit kalırsa",
          desc: "Kalabalık alanlarda en yakın 8 kişi içinden sahip ataması yapılır; klasik tek-kişi yöntemine göre çok daha güvenilir."
        },
        {
          name: "Keşif Davranışı",
          level: "HIGH",
          trigger: "Düşük yol verimliliği + geniş alan tarama",
          desc: "Bir alanı sistematik olarak gözlemleyen ve sıradan yaya hareketinden farklı bir örüntü çizen kişiler tespit edilir."
        },
        {
          name: "Koordineli Hareket",
          level: "HIGH",
          trigger: "2+ kişi uyumlu hız vektörüyle 5+ saniye birlikte",
          desc: "Vektör benzerliği eşiği 0.85 olarak ayarlıdır. Organize hareket eden grupları doğal yürüyüş gruplarından ayırır."
        }
      ]
    },
    threat: {
      title: "Tehdit Skoru Nasıl Hesaplanır?",
      kicker: "10 boyutlu vektör + hibrit karar",
      intro: "Her takip edilen nesne için saniyede 10 boyutlu bir özellik vektörü hesaplanır. Bu vektör hem küçük bir PyTorch MLP'ye hem de kural katmanına aynı anda beslenir; iki çıktı %60-%40 oranında birleştirilir.",
      featuresTitle: "10 Boyutlu Özellik Vektörü",
      features: [
        "Bölge ihlal skoru",
        "Normalleştirilmiş bekleme süresi",
        "Hız büyüklüğü",
        "Trajektori varyansı",
        "Anormal bekleme skoru",
        "Terk edilmiş nesne skoru",
        "Günün saati (sin kodlama)",
        "Nesne sınıfı risk katsayısı",
        "Keşif davranışı skoru",
        "Koordineli hareket skoru"
      ],
      mlpTitle: "MLP Mimarisi",
      mlpDesc: "PyTorch ile yazılmış küçük bir çok katmanlı algılayıcı. Edge cihazlarda dahi milisaniye altında çıkarım yapar.",
      mlpLayers: ["Giriş: 10", "Gizli: 32", "Gizli: 16", "Çıktı: 4"],
      fusionTitle: "Hibrit Karar",
      fusionDesc: "MLP istatistiksel kalıpları yakalar; kural katmanı domain bilgisini ve güvenlik ağını sağlar. MLP yüklenemezse sistem otomatik olarak ağırlıklı kural moduna geçer.",
      outputs: ["LOW", "MEDIUM", "HIGH", "CRITICAL"]
    },
    tech: {
      title: "Teknoloji Stack'i",
      kicker: "Açık kaynak ve üretim hazır",
      intro: "Tüm yığın açık kaynak bileşenlerden oluşur. Lisans engeli yok, vendor kilidi yok; her bileşen üretim ortamlarında kanıtlanmış kütüphanelerdir.",
      items: [
        { name: "YOLOv8", role: "Nesne tespiti", desc: "Ultralytics YOLOv8s; hız ve doğruluk dengesinde sektör standardı." },
        { name: "ByteTrack", role: "Çoklu nesne takibi", desc: "Düşük güven skorlu tespitleri değerlendirerek ID switch'i minimize eder." },
        { name: "PyTorch", role: "MLP eğitimi", desc: "Hibrit karar motorunun derin öğrenme katmanı." },
        { name: "OpenCV", role: "Görüntü işleme", desc: "ORB özellikleri, homografi, ego-motion kompanzasyonu." },
        { name: "NumPy", role: "Vektör hesaplama", desc: "10 boyutlu özellik vektörü ve trajektori istatistikleri." },
        { name: "Streamlit", role: "Dashboard", desc: "Operatör arayüzü, canlı görüntü, replay modu." },
        { name: "Python 3.10+", role: "Çalışma zamanı", desc: "Tüm pipeline tek bir Python süreci içinde çalışır." }
      ]
    },
    performance: {
      title: "Rakamlarla Performans",
      kicker: "Edge cihazlarda dahi gerçek zamanlı",
      intro: "Hedef metrikler bir mini PC üzerinde, GPU olmadan ölçülmüştür. GPU eklendiğinde FPS 2-3x artar.",
      metrics: [
        { value: 15, suffix: "+", label: "FPS", sub: "CPU üzerinde, YOLOv8s" },
        { value: 50, suffix: "+", label: "Eşzamanlı Takip", sub: "Kalabalık sahnelerde" },
        { value: 2, suffix: "s", label: "Alarm Gecikmesi", sub: "Olaydan alarma 1-2 sn" },
        { value: 25, suffix: "%", label: "Yanlış Alarm Hedefi", sub: "Cooldown ile bastırılır" },
        { value: 4, suffix: "K", label: "Çözünürlük Desteği", sub: "Downsampling ile" },
        { value: 100, suffix: "%", label: "On-Premise", sub: "Bulut zorunluluğu yok" }
      ]
    },
    privacy: {
      title: "KVKK ve Mahremiyet",
      kicker: "Yüz tanıma yok, sadece davranış",
      intro: "Sistem yüz tanıma, kimlik tespiti veya demografik analiz yapmaz. Anonim bir track ID üretilir ve oturum sonunda silinir; kişisel veri saklanmaz.",
      points: [
        { icon: "shield", title: "Yüz Tanıma Yok", desc: "Hiçbir biometrik veri toplanmaz veya işlenmez." },
        { icon: "lock", title: "Tamamen On-Premise", desc: "Tüm işlem yerel ağda kalır; bulut bağlantısı opsiyoneldir." },
        { icon: "id", title: "Anonim Track ID", desc: "Kişiler değil, hareket örüntüleri analiz edilir." },
        { icon: "balance", title: "Bias Minimizasyonu", desc: "Demografik bilgi kullanılmadığı için yanlılık riski sınırlıdır." }
      ]
    },
    demo: {
      title: "Demo ve Ekran Görüntüleri",
      kicker: "Sistemi iş başında görün",
      intro: "Streamlit dashboard üzerinde gerçek zamanlı bbox, alarm etiketleri ve tehdit skor renkleri görünür. Replay modu geçmiş olayları yeniden analiz etmenizi sağlar.",
      videoLabel: "Tanıtım videosu yakında eklenecek",
      videoSub: "Bu alana stant öncesi demo videosu yerleştirilecek.",
      screenshots: [
        { caption: "Ana Dashboard", note: "Canlı kamera akışı + tehdit skor renklendirmesi" },
        { caption: "Alarm Paneli", note: "Tetiklenen davranış + skor + zaman damgası" },
        { caption: "Replay Modu", note: "Geçmiş olayların kare kare analizi" }
      ]
    },
    team: {
      title: "Ekip",
      kicker: "",
      intro: "Proje, OSTİMTECH Ar-Ge ve İnovasyon Proje Pazarı II kapsamında yaklaşık 8 ayda geliştirildi.",
      members: [
        {
          name: "Azra Karakaya",
          role: "AI / Davranış Motoru",
          bio: "Davranış kuralları, MLP tasarımı, ego-motion entegrasyonu, VisDrone fine-tuning ve hata ayıklama.",
          github: "https://github.com/azrakarakaya1"
        },
        {
          name: "Emine Cakal",
          role: "Pipeline / Dashboard",
          bio: "YOLOv8 + ByteTrack entegrasyonu, Streamlit dashboard ve sistem mimarisi.",
          github: "https://github.com/EmineCakal5"
        }
      ]
    },
    contact: {
      title: "İletişim",
      kicker: "Birlikte çalışalım",
      intro: "Pilot uygulama, akademik iş birliği veya kurumsal entegrasyon için bizimle iletişime geçin. Stantımızda da bekleriz.",
      repoLabel: "GitHub Reposu",
      repoNote: "Açık kaynak, MIT lisansı planlanıyor",
      siteLabel: "Azra Karakaya",
      siteNote: "azrakarakaya.vercel.app",
      site2Label: "Emine Çakal",
      site2Note: "eminecakal.netlify.app",
      qrLabel: "QR ile hızlı erişim",
      qrNote: "Bu sayfayı telefonunuzdan açın",
      stand: "Stant No: —"
    },
    footer: {
      tagline: "Olaydan sonra değil, olay anında tespit.",
      navTitle: "Sayfalar",
      teamTitle: "Geliştirici Ekip",
      repo: "GitHub Reposu",
      rights: "© 2026 Ada Projesi — Açık kaynak güvenlik AI"
    }
  },

  en: {
    meta: {
      title: "Ada Project — Deep Learning Based Security Monitoring",
      description: "Open-source AI security system that detects 5 suspicious behaviors in real time from CCTV and UAV footage."
    },
    nav: {
      home: "Home",
      problem: "Problem",
      architecture: "Architecture",
      behaviors: "Behaviors",
      threat: "Threat Score",
      tech: "Tech",
      performance: "Performance",
      privacy: "Privacy",
      demo: "Demo",
      team: "Team",
      contact: "Contact"
    },
    hero: {
      tag: "OSTİMTECH R&D and Innovation Project Bazaar II",
      title: "Real-Time Security Monitoring System Powered by Deep Learning",
      slogan: "Detection during the event, not after.",
      description: "An open-source, privacy-compliant hybrid AI solution that detects suspicious behavior in real time from CCTV cameras and UAV footage.",
      cta_primary: "GitHub Repository",
      cta_secondary: "Watch Demo",
      cta_tertiary: "Explore Architecture",
      badges: ["Real-Time", "UAV + CCTV", "Hybrid AI", "Privacy First"]
    },
    problem: {
      title: "The Problem",
      kicker: "Traditional security monitoring falls short",
      intro: "Today's CCTV infrastructure records events but doesn't understand them. A human operator's attention drops sharply after 20 minutes; spotting anomalies across dozens of screens is practically impossible.",
      points: [
        { title: "Reactive Monitoring", desc: "Incidents are reviewed only after they happen, eliminating any chance to prevent them." },
        { title: "Operator Fatigue", desc: "Attention sharpness drops by 95% after 20 minutes (Sandia Lab study)." },
        { title: "Unscalable Watch", desc: "In a 1000-camera facility only a handful of feeds can be watched at once." },
        { title: "Late Alarm Cost", desc: "Every second between suspicious behavior and response amplifies the impact." }
      ]
    },
    architecture: {
      title: "System Architecture",
      kicker: "From pixels to decision in four stages",
      intro: "The system pushes the video stream through a four-stage pipeline. Each stage enriches the next; the result is a threat score and class for every tracked object.",
      hint: "Hover over the stages to read the details.",
      stages: [
        {
          name: "Video Input",
          short: "CCTV / UAV / Test Video",
          long: "RTSP, IP stream and file-based sources are supported. In drone mode an additional homography layer kicks in for ego-motion compensation."
        },
        {
          name: "YOLOv8 Detector",
          short: "COCO + VisDrone fine-tune",
          long: "Objects are detected per frame. Bounding boxes, classes and confidence scores are produced. Targets 15+ FPS on CPU."
        },
        {
          name: "ByteTrack Tracker",
          short: "track_id · trajectory · dwell_time",
          long: "Considers low-confidence detections too, minimizing ID switches. In UAV mode Kalman states are warped by ego-motion."
        },
        {
          name: "Behavioral Reasoning Engine",
          short: "Hybrid: 60% MLP + 40% Rules",
          long: "A 10-dimensional feature vector is computed. A PyTorch MLP (10 → 32 → 16 → 4) outputs the threat class; the rule layer acts as a safety net."
        },
        {
          name: "Streamlit Dashboard",
          short: "Live + Replay · JSON Alerts",
          long: "Operators see live video, alarms, heatmap and a replay mode. All alerts are persisted as JSON; email/Telegram integration is optional."
        }
      ]
    },
    behaviors: {
      title: "Detected Behaviors",
      kicker: "5 critical suspicious patterns",
      intro: "The system doesn't watch for a single dangerous event type — it tracks five behavior patterns distilled from crime and security literature.",
      cards: [
        {
          name: "Zone Violation",
          level: "HIGH",
          trigger: "When a person or vehicle enters a forbidden zone",
          desc: "Polygon zones defined by the operator trigger an immediate alarm on entry. In drone mode, zones are anchored to the ground via ego-motion."
        },
        {
          name: "Loitering",
          level: "MEDIUM",
          trigger: "Staying in the same spot for more than 60 seconds",
          desc: "People loitering near doors, counters or ATMs are flagged. Crowd effects are normalized to avoid false positives."
        },
        {
          name: "Abandoned Object",
          level: "HIGH",
          trigger: "Bag/luggage left more than 90 px from owner for 10+ seconds",
          desc: "Owner assignment uses the 8 nearest people, much more robust in crowded scenes than the classic single-person heuristic."
        },
        {
          name: "Reconnaissance",
          level: "HIGH",
          trigger: "Low path efficiency + wide-area sweeping",
          desc: "Detects people who systematically observe an area, distinct from regular pedestrian movement."
        },
        {
          name: "Coordinated Movement",
          level: "HIGH",
          trigger: "2+ people moving together with aligned velocity for 5+ seconds",
          desc: "Velocity similarity threshold is 0.85, separating organized groups from natural walking pairs."
        }
      ]
    },
    threat: {
      title: "How is the Threat Score Computed?",
      kicker: "10-D vector + hybrid decision",
      intro: "For every tracked object a 10-dimensional feature vector is computed every second. The vector is fed simultaneously to a small PyTorch MLP and the rule layer; the two outputs are fused 60% / 40%.",
      featuresTitle: "10-Dimensional Feature Vector",
      features: [
        "Zone violation score",
        "Normalized dwell time",
        "Velocity magnitude",
        "Trajectory variance",
        "Loitering score",
        "Abandoned object score",
        "Time of day (sin encoding)",
        "Object class risk weight",
        "Reconnaissance score",
        "Coordinated movement score"
      ],
      mlpTitle: "MLP Architecture",
      mlpDesc: "A small multi-layer perceptron written in PyTorch. Inference takes sub-millisecond time even on edge devices.",
      mlpLayers: ["Input: 10", "Hidden: 32", "Hidden: 16", "Output: 4"],
      fusionTitle: "Hybrid Decision",
      fusionDesc: "The MLP captures statistical patterns; the rule layer encodes domain knowledge and acts as a safety net. If the MLP fails to load, the system falls back to weighted rules automatically.",
      outputs: ["LOW", "MEDIUM", "HIGH", "CRITICAL"]
    },
    tech: {
      title: "Technology Stack",
      kicker: "Open source and production ready",
      intro: "The entire stack is composed of open-source components. No license walls, no vendor lock-in; every component is a battle-tested library.",
      items: [
        { name: "YOLOv8", role: "Object detection", desc: "Ultralytics YOLOv8s; industry standard balance of speed and accuracy." },
        { name: "ByteTrack", role: "Multi-object tracking", desc: "Considers low-confidence detections to minimize ID switches." },
        { name: "PyTorch", role: "MLP training", desc: "The deep-learning layer of the hybrid decision engine." },
        { name: "OpenCV", role: "Image processing", desc: "ORB features, homography, ego-motion compensation." },
        { name: "NumPy", role: "Vector compute", desc: "10-D feature vectors and trajectory statistics." },
        { name: "Streamlit", role: "Dashboard", desc: "Operator UI, live view, replay mode." },
        { name: "Python 3.10+", role: "Runtime", desc: "The whole pipeline runs inside a single Python process." }
      ]
    },
    performance: {
      title: "Performance in Numbers",
      kicker: "Real-time even on edge devices",
      intro: "Target metrics measured on a mini PC, no GPU. With a GPU the FPS goes 2–3× higher.",
      metrics: [
        { value: 15, suffix: "+", label: "FPS", sub: "On CPU, YOLOv8s" },
        { value: 50, suffix: "+", label: "Concurrent Tracks", sub: "In crowded scenes" },
        { value: 2, suffix: "s", label: "Alarm Latency", sub: "1–2 s from event to alert" },
        { value: 25, suffix: "%", label: "False Alarm Target", sub: "Suppressed via cooldown" },
        { value: 4, suffix: "K", label: "Resolution Support", sub: "Via downsampling" },
        { value: 100, suffix: "%", label: "On-Premise", sub: "No cloud requirement" }
      ]
    },
    privacy: {
      title: "Privacy and Compliance",
      kicker: "No face recognition, only behavior",
      intro: "The system performs no face recognition, identification or demographic analysis. An anonymous track ID is generated and discarded at session end; no personal data is stored.",
      points: [
        { icon: "shield", title: "No Face Recognition", desc: "No biometric data is ever collected or processed." },
        { icon: "lock", title: "Fully On-Premise", desc: "All processing stays on the local network; cloud is optional." },
        { icon: "id", title: "Anonymous Track IDs", desc: "We analyze movement patterns, not people." },
        { icon: "balance", title: "Bias Minimization", desc: "No demographic features are used, limiting bias risk." }
      ]
    },
    demo: {
      title: "Demo and Screenshots",
      kicker: "See the system in action",
      intro: "The Streamlit dashboard shows real-time bounding boxes, alarm tags and threat-colored overlays. The replay mode lets you re-analyze past events frame by frame.",
      videoLabel: "Demo video coming soon",
      videoSub: "A short demo video will be embedded here before the event.",
      screenshots: [
        { caption: "Main Dashboard", note: "Live camera feed + threat-score coloring" },
        { caption: "Alarm Panel", note: "Triggered behavior + score + timestamp" },
        { caption: "Replay Mode", note: "Frame-by-frame analysis of past events" }
      ]
    },
    team: {
      title: "Team",
      kicker: "",
      intro: "Developed within OSTİMTECH R&D and Innovation Project Bazaar II over roughly 8 months.",
      members: [
        {
          name: "Azra Karakaya",
          role: "AI / Behavior Engine",
          bio: "VisDrone fine-tuning, reconnaissance & coordinated movement detectors, threat vector expansion (8→10 dims), MLP architecture and debugging.",
          github: "https://github.com/azrakarakaya1"
        },
        {
          name: "Emine Cakal",
          role: "Pipeline / Dashboard",
          bio: "YOLOv8 + ByteTrack integration, Streamlit dashboard and system architecture.",
          github: "https://github.com/EmineCakal5"
        }
      ]
    },
    contact: {
      title: "Contact",
      kicker: "Let's collaborate",
      intro: "Reach out for pilot deployments, academic collaboration or enterprise integration. Drop by our booth too.",
      repoLabel: "GitHub Repository",
      repoNote: "Open source, MIT license planned",
      siteLabel: "Azra Karakaya",
      siteNote: "azrakarakaya.vercel.app",
      site2Label: "Emine Çakal",
      site2Note: "eminecakal.netlify.app",
      qrLabel: "Quick access via QR",
      qrNote: "Open this page on your phone",
      stand: "Booth No: —"
    },
    footer: {
      tagline: "Detection during the event, not after.",
      navTitle: "Pages",
      teamTitle: "Engineering Team",
      repo: "GitHub Repository",
      rights: "© 2026 Ada Project — Open-source security AI"
    }
  }
};
