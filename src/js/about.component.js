const aboutComponent = () => {
  const about = document.createElement('section');
  about.setAttribute('class', 'about');

  const container = document.createElement('article');
  container.setAttribute('class', 'container');

  const h2 = document.createElement('h2');
  h2.setAttribute('class', 'about-header');
  h2.textContent = 'who we are';

  const paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'about-paragraph');
  paragraph.textContent = 'Un restaurante, o un restaurante, es un negocio que prepara y sirve comida y bebidas a los clientes. Las comidas se sirven y comen generalmente en el local, pero muchos restaurantes también ofrecen servicios para llevar y de entrega de alimentos';

  container.appendChild(h2);
  container.appendChild(paragraph);
  about.appendChild(container);

  return about;
};

export default aboutComponent;