const express = require('express');
const app = express();
const path = require('path');

// EJS motorunu kullanmak için ayar yap
app.set('view engine', 'ejs');
// Bu satır, Express.js uygulamasına EJS'yi kullanacağını belirtir. Yani, bu ayarı yaptıktan sonra, .ejs uzantılı dosyalar şablon motoru olarak kullanılır ve bu dosyalar üzerinden dinamik HTML çıktıları oluşturulabilir.
// Static dosyaları (CSS, resimler, vs.) public klasöründen sun
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfayı render et
app.get('/', (req, res) => {
    res.render('index'); // index.ejs dosyasını render eder
});

// Sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

