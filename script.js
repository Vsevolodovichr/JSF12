//1
const express = require('express');
const os = require('os');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send(`<html>
    <head>
      <title>Node.js HTTP Server</title>
    </head>
    <body>
      <h1>Current User: ${os.userInfo().username}</h1>
      <h1>Operating System: ${os.platform()} ${os.release()}</h1>
      <h1>System Uptime: ${os.uptime()} minutes</h1>
      <h1>Current Working Directory: ${process.cwd()}</h1>
      <h1>Server File Name: ${path.basename(__filename)}</h1>
    </body>
  </html>`);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
//2
const moment = require('moment');

const hello = (username) => {
  const now = moment();
  const hour = now.hour();

  if (hour >= 6 && hour < 12) {
    console.log(`Доброго ранку, ${username}!`);
  } else if (hour >= 12 && hour < 18) {
    console.log(`Добрий день, ${username}!`);
  } else if (hour >= 18 && hour < 24) {
    console.log(`Добрий вечір, ${username}!`);
  } else {
    console.log(`Доброй ночі, ${username}!`);
  }
};

module.exports = hello;
