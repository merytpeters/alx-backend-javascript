import router from './routes/index';

// const bodyParser = require('body-parser');
const express = require('express');

const app = express();
// app.use(bodyParser.json());
app.use(router);
app.listen(1245, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:1245/');
});

export default app;
