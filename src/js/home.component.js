import home2 from '../img/home2.jpg';

const homeComponent = () => {
  const home = document.createElement('section');
  home.setAttribute('class', 'home');
  const container = document.createElement('article');
  container.setAttribute('class', 'container');

  const img1 = document.createElement('img');
  img1.setAttribute('class', 'home-image_1');
  img1.setAttribute('src', home2);

  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'home-title');
  h1.textContent = 'La Carne Restaurante';

  container.appendChild(img1);
  container.appendChild(h1);
  home.appendChild(container);

  return home;
};

export default homeComponent;