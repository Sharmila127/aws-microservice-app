const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
app.get('/', (req, res) => {
  res.json({ service: 'service2', message: 'Hello from service2!', instance: process.env.INSTANCE || 'local' });
});
app.get('/health', (req, res) => {
  res.send('OK');
});
app.listen(port, () => console.log(`service2 listening on ${port}`));
