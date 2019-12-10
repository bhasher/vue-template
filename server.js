const express = require('express');
const app = express();
const port = 80;

app.use(express.static(__dirname + '/dist'));

app.listen((process.env.PORT || 80), () => 
  console.log(`Server Started on port ${port}`)
);