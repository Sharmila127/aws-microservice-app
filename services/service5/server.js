const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
app.get('/', (req, res) => {
  res.json({ service: 'service5', message: 'Hello from service5!', instance: process.env.INSTANCE || 'local' });
});
app.get('/health', (req, res) => {
  res.send('OK');
});
app.listen(port, () => console.log(`service5 listening on ${port}`));
