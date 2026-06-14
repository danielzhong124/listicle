import { pool } from '../config/database.js';

const getDecks = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM decks ORDER BY release_date DESC');
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getDecks,
};
