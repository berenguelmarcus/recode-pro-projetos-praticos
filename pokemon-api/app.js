const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const searchPokemon = require('./src/functions/searchPokemon')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/pokemon-name', async (req, res) => {
    const { pokemonName } = req.body
    const { pokemonId } = req.body

    const result = await searchPokemon(pokemonName, pokemonId)

    console.log(result)

    res.render('result', {data: result})
})

app.listen(3333)