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
    res.render('myrecipes', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/', (req, res) => {
    res.render('myrecipes', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/myrecipes-page2', (req, res) => {
    res.render('myrecipes-page2', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/blog', (req, res) => {
    res.render('blog', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/postsfromyou', (req, res) => {
    res.render('postsfromyou', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
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



// Turkish

app.get('/tariflerim', (req, res) => {
    res.render('tariflerim', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/tariflerim-sayfa2', (req, res) => {
    res.render('tariflerim-sayfa2', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})


app.get('/hakkinda', (req, res) => {
    res.render('hakkinda', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/hakkinda', (req, res) => {
    res.render('hakkinda', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/trblog', (req, res) => {
    res.render('trblog', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/sizdengelenler', (req, res) => {
    res.render('sizdengelenler', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/iletisim', (req, res) => {
    res.render('iletisim', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/sizdengelenler', (req, res) => {
    res.render('sizdengelenler', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
})

app.get('/iletisim', (req, res) => {
    res.render('iletisim', {
        title: 'Weather',
        name: 'Ezgi Göktaş'
    })
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



app.get('*', (req, res) => {
    res.send('Page Not Found')
})



app.listen(port, () => {
    console.log('Server is up on port' + port)
    })