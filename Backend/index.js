const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors');
const PORT = process.env.port

connectToMongo();

const app = express()


// Using middleware here to work with JSON
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// Available Routes
app.use("/api/auth", require('./Routes/auth'))
app.use("/api/notes", require('./Routes/notes'))

app.listen(PORT, () => {
  console.log(`Notes app backend listening on port ${PORT}`)
})