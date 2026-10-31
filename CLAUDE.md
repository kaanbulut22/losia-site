# Losia web sitesi — proje kuralları

**Kullanıcıya HER ZAMAN Türkçe yaz:** ara bilgilendirmeler, açıklamalar, son mesajlar dahil. (Kod, dosya adları ve commit mesajları İngilizce kalır.)

Site: https://kaanbulut22.github.io/losia-site/ (GitHub Pages, `kaanbulut22/losia-site`). Düz HTML/CSS/JS; build adımı, izleyici, dış yazı tipi yok. Ayrıntılar: [README.md](README.md).

## Losia projeleri (birbirine bağlı)
Losia üç klasörde, üç ayrı Claude oturumunda yürüyor. Amaç: kullanıcı aynı soruya iki kez cevap vermesin.

| Klasör | Ne | Oturum adı (ListAgents'te) | Durum |
|---|---|---|---|
| `D:\losia` | Uygulama (Expo) | `losia-…` | `PROGRESS.md` |
| `D:\losia-site` | Web sitesi (GitHub Pages, `kaanbulut22/losia-site`) | `losia-site-…` | `CLAUDE.md`, `README.md`, git geçmişi |
| `D:\losia-sosyal` | Sosyal medya: hesaplar, kapaklar, gönderiler (`kaanbulut22/losia-sosyal`, gizli) | `losia-sosyal-…` | `PROGRESS.md`, `takvim.md` |

- **Sormadan önce bak:** Kullanıcıya bir şey sormadan önce diğer iki klasörün `CLAUDE.md` ve `PROGRESS.md`'sine bak (yalnızca okuyarak). Cevap oradaysa sorma, oradaki kararı kullan.
- **Haber ver:** Başka bir klasörü ilgilendiren bir karar ya da değişiklikte (yeni özellik, ekran görüntüsü, metin, marka kararı, yayın durumu, gizlilik politikası) `ListAgents` ile açık oturumu bul ve `SendMessage` ile kısa haber gönder: ne değişti, hangi dosya, onun ne yapması gerekiyor. Gelen mesajlara aynı şekilde cevap ver. Açık oturum yoksa kendi `PROGRESS.md`'nde "Diğer klasörler için" başlığı altına yaz; o oturum açılınca okur.
- **Herkes kendi klasörünü düzenler:** Diğer klasörün dosyasını değiştirme, oradaki oturumdan iste (kullanıcı açıkça istemedikçe). Sosyal medyayla ilgili her şey `D:\losia-sosyal`'da yapılır.
- **Ortak kurallar her klasörde aynı:** kullanıcıya her zaman Türkçe; sağlık sınırı; yeni tasarımda önce 2–3 seçenek ve önizleme; kod ve içerik dışı dosyaları git'e eklemeden önce sor; `D:\dozly`'ye dokunma. `D:\losia-build` yalnızca derleme kopyası.

## Sağlık sınırı (zorunlu)
Losia bir **güzellik/yaşam tarzı** uygulamasıdır; sağlık/tıbbi uygulama DEĞİLDİR. Sitedeki bütün metinler (TR ve EN), görsel açıklamaları (`alt`) ve ekran görüntüleri için geçerlidir:
- Cilt hastalığı, tanı, tedavi, ilaç, reçeteli ürün, semptom takibi anlatılmaz.
- Şu tür kelimeler kullanılmaz: tedavi, akne, egzama, rozasea, dermatolojik, hastalık, ilaç, reçete, iyileştirir (İngilizce karşılıkları da: treatment, acne, eczema, rosacea, dermatological, disease, medication/medicine/drug, prescription, cures/heals).
- Cilt analizi, fotoğraftan cilt değerlendirmesi, içerik (ingredient) etkileşim kontrolü vaat edilmez.
- İpuçları genel bakım önerisi olarak çerçevelenir, sağlık iddiası içermez.

## Site kuralları
- **TR ve EN sayfalar senkron:** `index.html` ↔ `en/index.html`, `gizlilik/` ↔ `en/privacy/`. Birinde yapılan metin, bölüm, görsel değişikliği diğerine de yapılır. Ekran görüntüleri `assets/screens/tr-*.webp` ve `en-*.webp` çiftleri olarak aynı ekranı göstermeli.
- **Gizlilik politikası** `D:\losia\docs\privacy-policy.md` ile aynı metindir. Orada değişirse burada da güncellenir (uygulama oturumundan haber gelir); burada kendiliğinden farklı bir şey yazılmaz.
- **Gizlilik adresleri kalıcı:** `/losia-site/gizlilik/` ve `/losia-site/en/privacy/` uygulamanın içinden (commit bc29417) ve Play Console'dan bağlanıyor; yolları değiştirme, klasörleri taşıma. Eski `losia-privacy` sayfasının kapatılması uygulama oturumunda takipte.
- Ekran görüntüleri telefondan alınır (uygulamanın örnek yedeği, `D:\losia\store\screenshots\make-sample-backup.mjs`), 720×1600 webp'ye çevrilir. Kaynak kopyalar `D:\losia-sosyal\kaynaklar\ekranlar\`'da da durur.
- Yerel önizleme için klasörü sunucuyla aç (`python -m http.server 8765`); dosyayı doğrudan açınca klasör bağlantıları (`en/`, `gizlilik/`) ve yazı tipleri çalışmaz.
- Paylaşım görselleri `_tools/og.html`'den headless tarayıcıyla 1200×630 üretilir. `_` ile başlayan klasörler yayınlanmaz.
- Sosyal medya kapakları ve şablonu bu depoda değil, `D:\losia-sosyal`'da (`sablonlar/kapak.html`); o işleri sosyal oturumu yapar.
- Yeni tasarımda önce 2–3 seçenek ve önizleme göster, onay al. Animasyonları headless tarayıcı doğrulayamaz; kullanıcıdan gerçek tarayıcıda bakmasını iste.
- Commit sonrası `git push` (GitHub Pages yayını push ile güncellenir). Kod ve içerik dışı dosyaları git'e eklemeden önce sor.
