'use strict'

const Promise = require('bluebird')
const fsProm = Promise.promisifyAll(require('fs'))
const pg = require('pg')
const Pool = pg.Pool
const ops = module.exports = {}

const pool = new Pool({
  user: process.env.USER,
  password: '',
  host: 'localhost',
  database: process.env.USER,
  max: 10,
  idleTimeoutMillis: 1000
})

pool.on('error', e => console.error(e))

function SQL(parts, ...values) {
  return {
    text: parts.reduce((prev, curr, i) => `${prev}$${i}${curr}`),
    values
  };
}

ops.createTableFeedback = function() {
  return new Promise((res, rej) => {
    const sqlCreate = `
      CREATE TABLE IF NOT EXISTS
      feedback (
        feedback_id SERIAL PRIMARY KEY,
        author VARCHAR(255) NOT NULL,
        "publishedOn" DATE,
        message TEXT NOT NULL
      );`

    res(
      pool.query(sqlCreate)
      .then(() => console.log('create feedback success'))
      .catch(err => rej(err))
    )
  })
}
