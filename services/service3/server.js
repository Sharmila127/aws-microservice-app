const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
app.get('/', (req, res) => {
  res.json({ service: 'service3', message: 'Hello from service3!', instance: process.env.INSTANCE || 'local' });
});
app.get('/health', (req, res) => {
  res.send('OK');
});
app.listen(port, () => console.log(`service3 listening on ${port}`));
