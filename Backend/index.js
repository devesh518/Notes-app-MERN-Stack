const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 5000

// Using middleware here to work with JSON
app.use(express.json())

// Available Routes
app.use("/api/auth", require('./Routes/auth'))
app.use("/api/notes", require('./Routes/notes'))

app.listen(port, () => {
  console.log(`Notes app backend listening on port ${port}`)
})