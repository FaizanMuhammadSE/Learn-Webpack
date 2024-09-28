import medicine from './medicine.jpg';

export const addImage = () => {
  const img = document.createElement('img');
  img.src = medicine;
  const body = document.querySelector('body');
  debugger;
  body.appendChild(img);
};
