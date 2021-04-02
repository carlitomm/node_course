const path = require('path')
const bodyParser = require('body-parser');
const express = require('express');
const parser = require('body-parser')
// const expressHbs = require('express-handlebars')

const app = express();

// app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts/', defaultlayout: 'main-layout'}))
// app.set('view engine', 'handlebars');
app.set('view engine', 'ejs');
app.set('views', 'views')

const adminData = require('./routes/admin')
const shopsRoutes = require('./routes/shop');
const { dirname } = require('path');

app.use(parser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'/public')))

app.use('/admin', adminData.routes);
app.use(shopsRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, '.', 'views', '404.html'));
    res.status(404).render('404' ,{pageTitle: 'pageNotFound'});
})


app.listen(3000)
