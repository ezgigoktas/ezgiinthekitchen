const path = require('path')
const fs = require('fs')
const hbs = require('hbs')
const express = require('express')



const app = express()
const port = process.env.PORT || 3000


app.use(express.json())

module.exports = app

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// English

app.get('', (req, res) => {
    res.render('myrecipes')
})

app.get('/myrecipes', (req, res) => {
    res.render('myrecipes')
})

app.get('/myrecipes-page2', (req, res) => {
    res.render('myrecipes-page2')
})

app.get('/myrecipes-page3', (req, res) => {
    res.render('myrecipes-page3')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.get('/postsfromyou', (req, res) => {
    res.render('postsfromyou')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy')
})

// My Recipes 

app.get('/01-yummy-mushroom-bowl', (req, res) => {
    res.render('01-yummy-mushroom-bowl')
})

app.get('/02-red-pepper-sauce', (req, res) => {
    res.render('02-red-pepper-sauce')
})

app.get('/03-strawberry-oatmeal', (req, res) => {
    res.render('03-strawberry-oatmeal')
})

app.get('/04-buns-with-dill', (req, res) => {
    res.render('04-buns-with-dill')
})

app.get('/05-spring-pasta', (req, res) => {
    res.render('05-spring-pasta')
})

app.get('/06-cute-chia-pudding', (req, res) => {
    res.render('06-cute-chia-pudding')
})

app.get('/07-double-sauced-cake', (req, res) => {
    res.render('07-double-sauced-cake')
})

app.get('/08-green-lentil-sauce', (req, res) => {
    res.render('08-green-lentil-sauce')
})

app.get('/09-rainbow-wrap', (req, res) => {
    res.render('09-rainbow-wrap')
})

app.get('/10-apple-oatmeal', (req, res) => {
    res.render('10-apple-oatmeal')
})

app.get('/11-rainbow-salad', (req, res) => {
    res.render('11-rainbow-salad')
})

app.get('/12-one-pot-spaghetti', (req, res) => {
    res.render('12-one-pot-spaghetti')
})

app.get('/13-pastry-filled-with-spinach', (req, res) => {
    res.render('13-pastry-filled-with-spinach')
})

app.get('/14-milky-mushroom-soup', (req, res) => {
    res.render('14-milky-mushroom-soup')
})

app.get('/15-roast-beef-ribs', (req, res) => {
    res.render('15-roast-beef-ribs')
})

app.get('/16-zucchini-patty', (req, res) => {
    res.render('16-zucchini-patty')
})

app.get('/17-stuffed-peppers', (req, res) => {
    res.render('17-stuffed-peppers')
})

app.get('/18-chicken-broth-soup', (req, res) => {
    res.render('18-chicken-broth-soup')
})

app.get('/19-spinach-oatmeal', (req, res) => {
    res.render('19-spinach-oatmeal')
})

app.get('/20-cherry-tomato-egg', (req, res) => {
    res.render('20-cherry-tomato-egg')
})

app.get('/21-spinach-penne', (req, res) => {
    res.render('21-spinach-penne')
})

app.get('/22-summer-time-oatmeal', (req, res) => {
    res.render('22-summer-time-oatmeal')
})

app.get('/23-colorful-eggplant', (req, res) => {
    res.render('23-colorful-eggplant')
})
// Addsense 

app.get('/ads.txt', (req, res) => {
    res.render('ads.txt.hbs')
})

// Turkish

app.get('/tariflerim', (req, res) => {
    res.render('tariflerim')
})

app.get('/tariflerim-sayfa2', (req, res) => {
    res.render('tariflerim-sayfa2')
})

app.get('/tariflerim-sayfa3', (req, res) => {
    res.render('tariflerim-sayfa3')
})


app.get('/hakkinda', (req, res) => {
    res.render('hakkinda')
})

app.get('/hakkinda', (req, res) => {
    res.render('hakkinda')
})

app.get('/trblog', (req, res) => {
    res.render('trblog')
})

app.get('/sizdengelenler', (req, res) => {
    res.render('sizdengelenler')
})

app.get('/iletisim', (req, res) => {
    res.render('iletisim')
})

app.get('/sizdengelenler', (req, res) => {
    res.render('sizdengelenler')
})

app.get('/iletisim', (req, res) => {
    res.render('iletisim')
})

app.get('/gizlilik-politikasi', (req, res) => {
    res.render('gizlilik-politikasi')
})


// Tariflerim

app.get('/01-nefis-mantar-kasesi', (req, res) => {
    res.render('01-nefis-mantar-kasesi')
})

app.get('/02-kirmizi-biber-sosu', (req, res) => {
    res.render('02-kirmizi-biber-sosu')
})

app.get('/03-cilekli-yulaf-ezmesi', (req, res) => {
    res.render('03-cilekli-yulaf-ezmesi')
})

app.get('/04-dereotlu-pogaca', (req, res) => {
    res.render('04-dereotlu-pogaca')
})

app.get('/05-bahar-makarnasi', (req, res) => {
    res.render('05-bahar-makarnasi')
})

app.get('/06-tatli-chia-puding', (req, res) => {
    res.render('06-tatli-chia-puding')
})

app.get('/07-cift-soslu-kek', (req, res) => {
    res.render('07-cift-soslu-kek')
})

app.get('/08-yesil-mercimek-sosu', (req, res) => {
    res.render('08-yesil-mercimek-sosu')
})

app.get('/09-gokkusagi-durum', (req, res) => {
    res.render('09-gokkusagi-durum')
})

app.get('/10-elmali-yulaf-ezmesi', (req, res) => {
    res.render('10-elmali-yulaf-ezmesi')
})

app.get('/11-gokkusagi-salata', (req, res) => {
    res.render('11-gokkusagi-salata')
})

app.get('/12-tek-kap-spagetti', (req, res) => {
    res.render('12-tek-kap-spagetti')
})

app.get('/13-ispanakli-borek', (req, res) => {
    res.render('13-ispanakli-borek')
})

app.get('/14-sutlu-mantar-corbasi', (req, res) => {
    res.render('14-sutlu-mantar-corbasi')
})

app.get('/15-dana-kaburga', (req, res) => {
    res.render('15-dana-kaburga')
})

app.get('/16-kabak-mucver', (req, res) => {
    res.render('16-kabak-mucver')
})

app.get('/17-biber-dolmasi', (req, res) => {
    res.render('17-biber-dolmasi')
})

app.get('/18-tavuk-suyu-corbasi', (req, res) => {
    res.render('18-tavuk-suyu-corbasi')
})

app.get('/19-ispanakli-yulaf-ezmesi', (req, res) => {
    res.render('19-ispanakli-yulaf-ezmesi')
})

app.get('/20-kiraz-domates-yumurtasi', (req, res) => {
    res.render('20-kiraz-domates-yumurtasi')
})

app.get('/21-ispanakli-kalem-makarna', (req, res) => {
    res.render('21-ispanakli-kalem-makarna')
})

app.get('/22-yaz-zamani-yulaf-ezmesi', (req, res) => {
    res.render('22-yaz-zamani-yulaf-ezmesi')
})

app.get('/23-renkli-patlican', (req, res) => {
    res.render('23-renkli-patlican')
})

// Page not found

app.get('*', (req, res) => {
    res.send('Page Not Found')
})



app.listen(port, () => {
    console.log('Server is up on port' + port)
    })