// import dotenv from 'dotenv'
// import express from 'express'
// import bodyParser from 'body-parser'
const http = require('http')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = require('express')()

app.use(bodyParser.json())
app.get('/song/info', (req, res) => {
  // see: https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
  // REQUEST AUTH TOKEN FROM SPOTIFY API

  // THEN REQUEST TRACK INFO
  res.json({ data: 'data', env: process.env })
})

module.exports = {path: '/spotify',handler:app}