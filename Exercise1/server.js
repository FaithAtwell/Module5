const express1 = require('express')
const app1 = express1()
const port1 = 3000
const express2 = require('express')
const app2 = express2()
const port2 = 3001

app1.get('/', (req, res) => {
    res.send('yo')
})

app1.listen(port1, () => {
    console.log(`Example app listening
at http://localhost:${port1}`)
})

app2.get('/', (req, res) => {
    res.send('go!')
})

app2.listen(port2, () => {
    console.log(`Example app listening
at http://localhost:${port2}`)
})