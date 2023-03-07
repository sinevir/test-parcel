const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })
  
// app.listen(3000)
app.use('*', (req, res) => {
    console.log('Був запрос від браузера')
    res.send("<h1>HELLO WORLD!</h1>")
})


const listener = app.listen(3000, () => {
    console.log(`Веб-сервер запущений на порті ${listener.address().port}`)
})