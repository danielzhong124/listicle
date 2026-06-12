const renderDeck = async () => {
  const requestedID = window.location.pathname.split('/').pop();

  try {
    const response = await fetch('/decks');
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    const deck = data?.find((d) => d.id === requestedID);
    if (deck) {
      document.title = deck.name;
      document.getElementById('deck-name').textContent = deck.name;
      document.getElementById('deck-image').src = deck.image;
      document.getElementById('deck-image').alt = deck.name;
      document.getElementById('deck-set').textContent = `Set: ${deck.set}`;
      document.getElementById('deck-colors').textContent = `Colors: ${deck.colors.join(', ')}`;
      document.getElementById('deck-commander').textContent = `Commander: ${deck.commander}`;
      document.getElementById('commander-image').src = deck.commanderImage;
      document.getElementById('commander-image').alt = deck.commander;
    } else {
      const deckContent = document.getElementById('deck-content');
      deckContent.textContent = '';
      const message = document.createElement('h2');
      message.textContent = 'Deck Not Found';
      deckContent.appendChild(message);
    }
  } catch (error) {
    console.error(error);
  }
};

renderDeck();
