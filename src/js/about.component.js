const aboutComponent = () => {
  const about = document.createElement('section');
  about.setAttribute('class', 'about');
  const h1 = document.createElement('h1');
  h1.textContent = 'About Page';

  about.appendChild(h1);

  return about;
};

export default aboutComponent;