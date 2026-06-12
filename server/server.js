import express from 'express';
import './config/dotenv.js';
import decksRouter from './routes/decks.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));

app.use('/decks', decksRouter);

app.get('/', (req, res) => {
  res
    .status(200)
    .send('<h1 style="text-align: center; margin-top: 3rem;">MTG Commander Precon API</h1>');
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
