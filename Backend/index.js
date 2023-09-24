const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
9
const app = express()
const port = 3000

//Availabe Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('Hello Kaushik!')
})

// app.get('/api/v1/login', (req, res) => {
//     res.send('Hello login!')
// })

// app.get('/api/v1/signup', (req, res) => {
//     res.send('Hello signup!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})