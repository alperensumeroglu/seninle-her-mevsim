# Seninle Her Mevsim — Alperen & Hanife

Türkçe, mobil uyumlu kişisel bir romantik site. Kurulum ve derleme gerektirmez.

## Önizleme

Bu klasörde `python3 -m http.server 8080` çalıştırıp http://localhost:8080 adresini açın.

## Akış ve fotoğraf

`index.html` fotoğraflı Evet / Hayır ekranıdır. Evet, aynı sekme içinde `surprise.html` sayfasını açar. Fotoğraf `assets/biz.png` dosyasındadır; iki sayfada da tamamı korunur.

“Şarkımızı çal” doğrudan HTML ses oynatıcısı kullanır. Yayında otomatik hazır olması için izinli ses dosyasını `assets/song.mp3` olarak ekleyin. Dosya yoksa cihazdan ses seçme seçeneği görünür; seçilen dosya yüklenmez ve yalnızca açık oturumda çalar. YouTube bağımlılığı kaldırılmıştır.

## Kişiselleştirme

- Açılış sorusu: `index.html`, `welcome.css`
- Hayır yanıtları ve şarkı kontrolü: `welcome.js`
- Fotoğraf, çiçekler ve 20 Ekim 2026 tarihi: `surprise.html`, `surprise.css`
- Çiçekleri yeniden açtırma: `surprise.js`
- Orijinal çiçek animasyonu: `index1.html`, `style1.css`, `main1.js`

## Vercel

Statik site; Framework Preset: Other, Build Command: boş, Output Directory: `.`. Proje henüz yayınlanmamıştır. Arama motorları için noindex vardır; bu bir parola koruması değildir.

## Kaynak

Temel repo: https://github.com/junayed-hasan/valentines_blossoming_flower
Orijinal MIT lisansı LICENSE dosyasında korunmuştur. Çiçek animasyonu Md Usman Ansari’nin çalışmasına dayanır; orijinal açıklama ORIGINAL-README.md dosyasındadır.
