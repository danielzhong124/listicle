const renderDeck = async () => {
  const requestedID = window.location.pathname.split('/').pop();
  console.log('Requested ID:', requestedID);
  const response = await fetch('/decks');
  if (response.ok) {
    const data = await response.json();
    if (data) {
      const deck = data.find((d) => d.id === requestedID);
      if (deck) {
        document.title = deck.name;
        document.getElementById('deck-name').textContent = deck.name;
        document.getElementById('deck-image').src = deck.image;
        document.getElementById('deck-image').alt = deck.name;
        document.getElementById('deck-set').textContent = `Set: ${deck.set}`;
        document.getElementById('deck-colors').textContent = `Colors: ${deck.colors.join('/')}`;
        document.getElementById('deck-commander').textContent = `Commander: ${deck.commander.name}`;
        document.getElementById('commander-image').src = deck.commander.image;
        document.getElementById('commander-image').alt = deck.commander.name;
      }
    }
  }
};

renderDeck();
