const express = require('express')
const path = require('path')

// app e middlewares
const app = express()
app.set('view engine', 'ejs') // template engine
app.set('views', path.join(__dirname, 'views')) // apenas views porque o server.js ja esta na pasta src
app.use(express.static(path.join(__dirname, 'public'))) // arquivos publicos
app.use(express.urlencoded({ extended: true })) // dados de formulario



// rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home'
  })
})

// error 404 (not found)
app.use((req, res) => {
  res.send('Pagina nao encontrada')
})



// executando o servidor
const port = process.env.PORT || 8081
app.listen(port, () => console.log(`Server is listening on port ${port}!`))