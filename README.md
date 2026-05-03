# Ada Project — Web

**Derin Öğrenme Tabanlı Gerçek Zamanlı Güvenlik İzleme Sistemi**  
OSTİMTECH Ar-Ge ve İnovasyon Proje Pazarı II

---

## Hakkında

Bu repo, Ada Projesinin portfolyo tanıtım sitesini içerir. Saf HTML + CSS + Vanilla JS ile yazılmıştır; build adımı yoktur. TR/EN dil desteği mevcuttur.

---

## Yerel Geliştirme

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

→ `http://localhost:8000`

---

## Proje Yapısı

```
Ada-project-Web/
├── index.html          # Tüm bölümler tek sayfada
├── css/
│   └── style.css       # Tüm stiller + CSS değişkenleri
├── js/
│   ├── locales.js      # TR + EN metin içeriği
│   ├── i18n.js         # Dil motoru ve dinamik render
│   └── main.js         # Animasyonlar, sayaçlar, hero canvas
└── assets/
    ├── icons/
    ├── images/         # Ekran görüntüleri
    └── videos/         # Demo videosu
```

---

## İçerik Güncelleme

Tüm metinler `js/locales.js` dosyasındadır:

```js
window.LOCALES = {
  tr: { hero: { title: "..." }, team: { members: [...] }, ... },
  en: { hero: { title: "..." }, team: { members: [...] }, ... }
};
```

Yeni bir metin alanı eklemek için HTML'de `data-i18n="bolum.alan"` özniteliğini kullan.  
Dinamik içerik (kartlar, listeler) için `js/i18n.js` içindeki render fonksiyonlarına bak.

---

## Medya Ekleme

Eksik medya içeriklerini bulmak için:

```bash
grep -rn "DEMO_PLACEHOLDER\|QR_PLACEHOLDER" .
```

| İçerik | Dosya Yolu | Notlar |
|---|---|---|
| Demo video | `assets/videos/demo.mp4` | Poster: `assets/images/demo-poster.jpg` |
| Ekran görüntüleri | `assets/images/dashboard.png` vb. | `renderScreenshots` fonksiyonunda yer tutucu var |
| QR kod | `assets/images/qr.png` | Final URL belirlendikten sonra üret |

---

## Tasarım Değişkenleri

`css/style.css` dosyasının başındaki `:root` bloğu tek değişiklik noktasıdır:

```css
:root {
  --bg:       #07101F;
  --accent:   #3D6FCC;
  --accent-2: #5B8DEF;
  --lvl-high: #FB923C;
}
```

---

## Deploy

| Platform | Yöntem |
|---|---|
| **Netlify** | `app.netlify.com` → Add new site → Deploy manually → klasörü sürükle-bırak |
| **Vercel** | `npx vercel` |
| **GitHub Pages** | Settings → Pages → main branch → / (root) |

---

## Ekip

| Kişi | Rol |
|---|---|
| [Azra Karakaya](https://azrakarakaya.vercel.app) | AI / Davranış Motoru |
| [Emine Çakal](https://eminecakal.netlify.app) | Pipeline / Dashboard |

---

## Lisans

MIT — site kodu için. Ana proje reposuna ayrıca bakın.
