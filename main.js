'use strict'

const {db} = require('./server/db')
const app = require('./server')
const PORT = 1337



db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
    console.log('db synced')
  })
