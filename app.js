const express = require('express');

const app = express();
const port = 5000;

app.set('views', './src/views');
app.set('view engine', 'ejs');

require('./src/routes/home.routes')(app)

//Run Server
app.listen(port, () => {
    console.log(`Server Run On http://localhost:${port}`)
});






