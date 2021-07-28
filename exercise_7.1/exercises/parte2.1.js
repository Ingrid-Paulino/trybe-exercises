// ex 3
const btn = document.getElementById('btn');
const nClick = document.getElementById('n-click')
let clickCount = 0;
btn.addEventListener('click', () => {
  clickCount += 1;
  nClick.innerText = `A quantidade de click é ${clickCount}`
})