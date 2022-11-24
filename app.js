const express = require('express');
const app = express()
const db = require('./config/db')
var cors = require('cors')

const allRoutes = require('./routes');

const PORT = process.env.PORT || 3000

db.then(() =>{
  console.log("database terkoneksi")
})
.catch((err) =>{
  console.log(err)
})

app.use(cors(express.json()))
app.use(cors(allRoutes))

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})