const list = document.querySelectorAll('.thumb li > img');
const circle = document.querySelector('.circle');
let imageBg = document.querySelector('.starbucks');

for (let elementos of list) {
  elementos.addEventListener('click', () => {
    toggleBackgroundImage(elementos.src);
    changeCircleColor(elementos.src);
  })
}
function toggleBackgroundImage(sourceImage) {
  imageBg.src = sourceImage.replace('thumb', 'img');
}
function changeCircleColor(sourceImage) {
  const nameThumb = sourceImage.substr(29,6).replace('thumb', 'img');
  const colors = {
    img1: '#017143',
    img2: '#eb7495',
    img3: '#d752b1'
  }
  circle.style.background = colors[nameThumb];
}


