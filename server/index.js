const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

//app.use('/', express.static(`${__dirname}`));
//app.get('/', (req, res) => {
// res.sendFile(path.resolve(`${__dirname}`, 'index.html'))  
//});

app.listen(3001, function () {
  console.log(`Server is run and listening on port localhost:3001`);
});