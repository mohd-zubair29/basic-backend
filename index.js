require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram' , (req, res)=>{    // "/ Slash Is Compulsory"
    res.send("mohammed._.zubair");
})

app.get('/Mydairy', (req, res)=>{
    res.send("<h1>Hello this Is Just A Timepass line Of Code</h1>");
})
let pen=process.env.PORT;
app.listen(pen, () => {
  console.log(`app listening at port ${pen}`)
})