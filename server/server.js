const express = require('express');
const path = require('path');
const fs = require('fs');

const cors = require('cors');
const buildConfig = require('./config');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 9007;

app.get('/env.js', function(req, res) {
  res.set('Content-Type', 'application/javascript');
  res.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  // Pass env variables to react
  const { 
    API_BASE_URL
  } = buildConfig();
  res.send(`window.env=${JSON.stringify({ API_BASE_URL })}`);
});

// Redirect js to pre gziped
app.get('*.js', function(req, res, next) {
  // only if file exists, the substr is to remove /assets in front
  if (
    !fs.existsSync(
      path.join(__dirname, '../build/static', `${req.url.substr(7)}.gz`)
    )
  ) {
    return next();
  }

  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

// Load static midleware
app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
