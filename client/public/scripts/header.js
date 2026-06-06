const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.classList.add('container');

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Dark Preconfidant';

headerContainer.appendChild(headerTitle);

header.appendChild(headerContainer);
