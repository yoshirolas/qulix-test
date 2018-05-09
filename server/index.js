const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({ origin: '*' }));

//app.use('/', express.static(`${__dirname}`));
//app.get('/', (req, res) => {
// res.sendFile(path.resolve(`${__dirname}`, 'index.html'))  
//});

app.listen(3001, function () {
  console.log(`Server is run and listening on port localhost:3001`);
});