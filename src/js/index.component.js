import aboutComponent from './about.component';
import footerComponent from './footer.component';
import headerComponent from './header.component';
import homeComponent from './home.component';
import menuComponent from './menu.component';

const indexComponent = () => {
  const { body } = document;

  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  content.appendChild(headerComponent());
  content.appendChild(menuComponent());
  content.appendChild(homeComponent());
  content.appendChild(aboutComponent());
  content.appendChild(footerComponent());

  body.appendChild(content);

  return body;
};

export default indexComponent;