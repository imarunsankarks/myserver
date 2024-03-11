const express = require('express');

const app = express();

const port = 7000;

app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`Listening to ${port}`);
})

app.get('/', (req, res) => {
    let title = 'Updated Home';
    res.render('index', { title })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/home', (req, res) => {
    res.redirect('/')
})

app.use((req, res) => {
    res.status(404).render('404')

})