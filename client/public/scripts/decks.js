const renderDecks = async () => {
  const mainContent = document.getElementById('main-content');

  const response = await fetch('/decks');
  if (response.ok) {
    const data = await response.json();

    if (data) {
      data.forEach((deck) => {
        const card = document.createElement('article');
        card.classList.add('card');

        const cardHeader = document.createElement('header');
        const cardImage = document.createElement('img');
        cardImage.src = deck.image;
        cardImage.alt = deck.name;
        cardHeader.appendChild(cardImage);

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = deck.name;

        const cardText = document.createElement('p');
        cardText.textContent = deck.set;

        const cardButton = document.createElement('a');
        cardButton.role = 'button';
        cardButton.href = `/decks/${deck.id}`;
        cardButton.textContent = 'View Deck';
        cardButton.classList.add('secondary');

        card.appendChild(cardHeader);

        card.appendChild(cardTitle);
        card.appendChild(cardText);
        card.appendChild(cardButton);
        mainContent.appendChild(card);
      });
    } else {
      const message = document.createElement('h2');
      message.textContent = 'No Decks Found';
      mainContent.appendChild(message);
    }
  }
};

const requestedUrl = window.location.pathname.split('/').pop();
if (requestedUrl) {
  window.location.href = '../404.html';
} else {
  renderDecks();
}
