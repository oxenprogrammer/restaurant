const footerComponent = () => {
  const footerSection = document.createElement('section');
  footerSection.setAttribute('class', 'footer-section');

  const footer = document.createElement('footer');
  footer.setAttribute('class', 'footer');
  footer.textContent = 'Copyright @ Emmisteel 2021';

  footerSection.appendChild(footer);

  return footerSection;
};

export default footerComponent;