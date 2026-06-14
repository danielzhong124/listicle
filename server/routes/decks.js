import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import DecksController from '../controllers/decks.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', DecksController.getDecks);

router.get('/:deckId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/deck.html'));
});

export default router;
