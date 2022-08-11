const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;

//Setup MongoDB
mongoose.connect('mongodb://localhost:27017/mbmenulis_blog');

//Setup EJS
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: false
}));


// app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    cookie: { maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

//Konfigurasi Method Override
app.use(methodOverride('_method'));

//Konfigurasi File Static
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

require('./src/routes/home.routes')(app);
require('./src/routes/blog.routes')(app);
// require('./src/routes/register.routes')(app);
// require('./src/routes/login.routes')(app);





// const data = {
//     user: 'admin',
//     pass: 'admin'
// };

// app.get('/login', (req, res) => {
//     res.render('login')
// })

// app.post('/login', (req, res) => {
//     let login = {
//         username: req.body.username,
//         password: req.body.password
//     }
//     if (login.username === data.user && login.password === data.pass) {
//         res.redirect('blog/artikel')
//     }else{
//         res.render('login');
//     }
// })

//Run Server
app.listen(port, () => {
    console.log(`Server Run On http://localhost:${port}`)
});






