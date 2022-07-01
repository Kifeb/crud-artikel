const express = require('express');

const app = express();
const port = 5000;

app.set('views', './src/views');
app.set('view engine', 'ejs');

//Konfigurasi File Static
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

require('./src/routes/home.routes')(app);

//Run Server
app.listen(port, () => {
    console.log(`Server Run On http://localhost:${port}`)
});






