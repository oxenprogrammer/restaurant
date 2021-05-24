import headerComponent from './header.component';
import menuComponent from './menu.component';

const indexComponent = () => {
  const { body } = document;

  body.appendChild(headerComponent());
  body.appendChild(menuComponent());

  return body;
};

export default indexComponent;