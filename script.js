function changeBackgroundColor (color) {
  document.body.style.backgroundColor = color;

  const bgColor = getComputedStyle(document.body).backgroundColor;
  const isLightColor = isLight(bgColor);
  const textElement = document.querySelector('#text');
  const arrowElement = document.querySelector('#arrow');
  textElement.style.color = isLightColor ? 'black' : 'white';
  arrowElement.style.borderColor = isLightColor ? 'black' : 'white';

function isLight(color) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
  }
}