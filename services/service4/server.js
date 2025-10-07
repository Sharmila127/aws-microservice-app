const express = require('express');
const app = express();
const port = process.env.PORT || 3004;
app.get('/', (req, res) => {
  res.json({ service: 'service4', message: 'Hello from service4!', instance: process.env.INSTANCE || 'local' });
});
app.get('/health', (req, res) => {
  res.send('OK');
});
app.listen(port, () => console.log(`service4 listening on ${port}`));
