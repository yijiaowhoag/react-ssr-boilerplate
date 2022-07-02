import express from 'express';
import { requestHandler } from './helpers/renderer';

const app = express();

app.use(express.static('public'));
app.get('*', requestHandler);

app.listen(3000, () => {
  console.log('🚀 Listening on port 3000');
});
