import logo from '../img/logo.png';

const headerComponent = () => {
  const header = document.createElement('nav');
  header.setAttribute('class', 'navbar');

  const img = document.createElement('img');
  img.setAttribute('class', 'logo');
  img.setAttribute('src', logo);

  const links = document.createElement('header');
  links.setAttribute('class', 'nav-links');

  const home = document.createElement('div');
  home.setAttribute('class', 'link home-link');
  home.textContent = 'home';

  const menu = document.createElement('div');
  menu.setAttribute('class', 'link menu-link');
  menu.textContent = 'menu';

  const contact = document.createElement('div');
  contact.setAttribute('class', 'link contact-link');
  contact.textContent = 'about';

  home.addEventListener('click', () => {
    const homeItems = document.querySelector('.home');
    const menuItems = document.querySelector('.menu');
    const aboutItems = document.querySelector('.about');
    if (homeItems.style.display === 'flex') {
      menuItems.style.display = 'none';
      aboutItems.style.display = 'none';
    } else {
      homeItems.style.display = 'flex';
      menuItems.style.display = 'none';
      aboutItems.style.display = 'none';
    }
  });

  menu.addEventListener('click', () => {
    const homeItems = document.querySelector('.home');
    const menuItems = document.querySelector('.menu');
    const aboutItems = document.querySelector('.about');
    if (menuItems.style.display === 'flex') {
      homeItems.style.display = 'none';
      aboutItems.style.display = 'none';
    } else {
      menuItems.style.display = 'flex';
      homeItems.style.display = 'none';
      aboutItems.style.display = 'none';
    }
  });

  contact.addEventListener('click', () => {
    const homeItems = document.querySelector('.home');
    const menuItems = document.querySelector('.menu');
    const aboutItems = document.querySelector('.about');
    if (aboutItems.style.display === 'flex') {
      homeItems.style.display = 'none';
      menuItems.style.display = 'none';
    } else {
      aboutItems.style.display = 'flex';
      homeItems.style.display = 'none';
      menuItems.style.display = 'none';
    }
  });

  links.appendChild(home);
  links.appendChild(menu);
  links.appendChild(contact);

  header.appendChild(img);
  header.appendChild(links);

  return header;
};

export default headerComponent;