import aboutComponent from './about.component';
import footerComponent from './footer.component';
import headerComponent from './header.component';
import homeComponent from './home.component';
import menuComponent from './menu.component';

const indexComponent = () => {
  const { body } = document;

  body.appendChild(headerComponent());
  body.appendChild(menuComponent());
  body.appendChild(homeComponent());
  body.appendChild(aboutComponent());
  body.appendChild(footerComponent());

  return body;
};

export default indexComponent;