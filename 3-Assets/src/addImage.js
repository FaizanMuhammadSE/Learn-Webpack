import medicine from './medicine.jpg';
import altText from './imgText.txt';

export const addImage = () => {
  const img = document.createElement('img');
  img.src = medicine;
  img.alt = altText;
  const body = document.querySelector('body');
  debugger;
  body.appendChild(img);
};
