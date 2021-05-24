import logo from '../img/logo.png';

const headerComponent = () => {
  const header = document.createElement('nav');
  header.setAttribute('class', 'navbar');

  const title = document.createElement('h1');
  title.setAttribute('class', 'title');
  title.textContent = 'Carne Restaurante';

  const img = document.createElement('img');
  img.setAttribute('class', 'logo');
  img.setAttribute('src', logo);

  header.appendChild(title);
  header.appendChild(img);

  return header;
};

export default headerComponent;