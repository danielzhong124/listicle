const renderDecks = async () => {
  const response = await fetch('/decks');

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Failed to load decks:', response.status, response.statusText, errorBody);
    throw new Error(`Failed to load decks: ${response.status} ${response.statusText}`);
  }

  const text = await response.text();
  if (!text) {
    throw new Error('Empty response received from /decks');
  }

  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    console.error('Invalid JSON received from /decks:', text);
    throw error;
  }

  const main = document.getElementById('main-content');
  if (data && data.length) {
    data.forEach((deck) => {
      const card = document.createElement('article');
      card.classList.add('card');

      const cardHeader = document.createElement('header');
      const cardImage = document.createElement('img');
      cardImage.src = deck.image;
      cardImage.alt = deck.name;
      cardHeader.appendChild(cardImage);

      const cardText = document.createElement('h3');
      cardText.textContent = deck.name;

      card.appendChild(cardHeader);
      card.appendChild(cardText);
      main.appendChild(card);
    });
  } else {
    const msg = document.createElement('h2');
    msg.textContent = 'No Decks Found';
    main.appendChild(msg);
  }
};

renderDecks().catch((error) => {
  console.error(error);
});
