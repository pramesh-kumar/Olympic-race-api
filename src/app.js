const express = require('express')
require("../src/db/conn")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

const router = require('../src/routers/men')
app.use(router)

app.listen(port,()=>{
    console.log(`App running on ${port}...`)
})

