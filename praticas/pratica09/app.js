const express = require('express');
const app = express();
const apirouterDocs = require('./routes/apirouterdocs');

app.use(express.json());
app.use('/api-docs', apirouterDocs);

module.exports = app;
