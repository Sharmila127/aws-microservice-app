const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
app.get('/', (req, res) => {
  res.json({ service: 'service1', message: 'Hello from service1!', instance: process.env.INSTANCE || 'local' });
});
app.get('/health', (req, res) => {
  res.send('OK');
});
app.listen(port, () => console.log(`service1 listening on ${port}`));
