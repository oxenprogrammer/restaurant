const homeComponent = () => {
  const home = document.createElement('section');
  home.setAttribute('class', 'home');
  const h1 = document.createElement('h1');
  h1.textContent = 'Home Page';

  home.appendChild(h1);

  return home;
};

export default homeComponent;