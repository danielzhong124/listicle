const header = document.querySelector('body > header');

const headerContainer = document.createElement('div');
headerContainer.classList.add('container', 'header-container');

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'MTG Commander Precons';

const headerButton = document.createElement('a');
headerButton.role = 'button';
headerButton.href = '/';
headerButton.textContent = 'Browse Precons';

headerContainer.appendChild(headerTitle);
headerContainer.appendChild(headerButton);

header.appendChild(headerContainer);
