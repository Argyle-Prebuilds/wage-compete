const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

const PORT = process.env.REACT_APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});