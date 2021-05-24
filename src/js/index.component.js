import headerComponent from './header.component';

const indexComponent = () => {
  const { body } = document;

  body.appendChild(headerComponent());

  return body;
};

export default indexComponent;