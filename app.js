const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
const port = 5000;

//Setup MongoDB
mongoose.connect('mongodb://localhost:27017/mbmenulis_blog');

//Setup EJS
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use(express.urlencoded({
    extended: false
}))

//Konfigurasi Method Override
app.use(methodOverride('_method'));

//Konfigurasi File Static
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

require('./src/routes/home.routes')(app);
require('./src/routes/blog.routes')(app);


//Run Server
app.listen(port, () => {
    console.log(`Server Run On http://localhost:${port}`)
});






