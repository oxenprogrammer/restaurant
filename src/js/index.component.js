const indexComponent = () => {
  const { body } = document;
  const title = document.createElement('h1');
  title.setAttribute('class', 'title');
  title.textContent = 'Yummy Recipe Restaurant';

  body.appendChild(title);

  return body;
};

export default indexComponent;