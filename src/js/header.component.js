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
  contact.textContent = 'contact';

  links.appendChild(home);
  links.appendChild(menu);
  links.appendChild(contact);

  header.appendChild(img);
  header.appendChild(links);

  return header;
};

export default headerComponent;