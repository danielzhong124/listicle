import { pool } from './database.js';
import './dotenv.js';
import deckData from '../data/decks.js';

const createDecksTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS decks;

    CREATE TABLE IF NOT EXISTS decks (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        set VARCHAR(255) NOT NULL,
        colors VARCHAR(10)[] NOT NULL,
        commander VARCHAR(255) NOT NULL,
        commanderImage VARCHAR(255) NOT NULL
    )
`;

  try {
    const res = await pool.query(createTableQuery);
    console.log('Table created successfully');
  } catch (err) {
    console.error('Error creating table', err);
  }
};

const seedDecksTable = async () => {
  await createDecksTable();

  deckData.forEach((deck) => {
    const insertQuery = {
      text: 'INSERT INTO decks (name, image, set, colors, commander, commanderImage) VALUES ($1, $2, $3, $4, $5, $6)',
    };

    const values = [
      deck.name,
      deck.image,
      deck.set,
      deck.colors,
      deck.commander,
      deck.commanderImage,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('Error inserting deck', err);
        return;
      }

      console.log(`${deck.name} added successfully`);
    });
  });
};

seedDecksTable();
