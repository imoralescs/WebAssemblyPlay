'use strict'

const express = require('express')

express.static.mime.types['wasm'] = 'application/wasm'

//-- App
const app = express()

//-- View
app.use(express.static('src/public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

//-- Router
app.get('/', async (req, res) => {
    res.render('index');
})

app.listen(
    process.env.PORT || 3000, 
    () => console.log(`Server running!`)
);