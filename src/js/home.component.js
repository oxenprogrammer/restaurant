import home1 from '../img/home1.jpg';
// import home2 from '../img/home2.jpg';
// import home3 from '../img/home3.jpg';

const homeComponent = () => {
  const home = document.createElement('section');
  home.setAttribute('class', 'home');
  const container = document.createElement('article');
  container.setAttribute('class', 'container');

  const img1 = document.createElement('img');
  img1.setAttribute('class', 'home-image_1');
  img1.setAttribute('src', home1);

  container.appendChild(img1);

  home.appendChild(container);

  return home;
};

export default homeComponent;