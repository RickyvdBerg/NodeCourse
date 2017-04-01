const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.send('Hello Express!')
  res.send({
    name: 'ricky',
    likes: [
      'guitars',
      'programming'
    ]
  })
})

app.listen(3000);
