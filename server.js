const express = require('express');

const app = express();
app.use(express.static('build'));

app.listen(6060, () => console.log('server is up'));
