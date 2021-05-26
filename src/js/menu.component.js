import dish from './dish';

const menuComponent = () => {
  const menu = document.createElement('section');
  menu.setAttribute('class', 'menu');

  const dishes = document.createElement('article');
  dishes.setAttribute('class', 'dishes');

  dish.forEach((chicken) => {
    const name = document.createElement('div');
    name.setAttribute('class', 'dish-name');
    const img = document.createElement('img');
    img.setAttribute('class', 'dish-image');
    const d = document.createElement('div');
    d.setAttribute('class', 'dish');
    name.textContent = chicken.name;
    img.setAttribute('src', chicken.image);

    const ingredients = document.createElement('div');
    ingredients.setAttribute('class', 'dish-ingredients');

    chicken.ingredients.forEach((ingred) => {
      const ingredient = document.createElement('div');
      ingredient.setAttribute('class', 'ingredient');
      ingredient.textContent = ingred;
      ingredients.appendChild(ingredient);
    });

    d.appendChild(img);
    d.appendChild(name);
    d.appendChild(ingredients);
    dishes.appendChild(d);
  });

  menu.appendChild(dishes);

  return menu;
};

export default menuComponent;