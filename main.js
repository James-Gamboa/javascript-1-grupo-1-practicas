const setText = document.getElementById('set-text');
const clearText = document.querySelector('#clear-text');
const story = document.querySelector('.story');
const result = document.querySelector('.result');

// @ts-ignore
setText.addEventListener('click', function() {
  // @ts-ignore
  const text = story.value;
  // @ts-ignore
  result.textContent = text;
});

// @ts-ignore
setText.addEventListener('mouseover', () => {
  // @ts-ignore
  setText.classList.add('hover');
});

// @ts-ignore
setText.addEventListener('mouseout', () => {
  // @ts-ignore
  setText.classList.remove('hover');
});

// @ts-ignore
clearText.addEventListener('click', () => {
  // @ts-ignore
  story.value = '';
  // @ts-ignore
  result.textContent = '';
  activar();
});

function activar() {
  alert('Se activó el click');
}



const toggle = document.querySelector('.toggle');
const content = document.querySelector('.content');

// @ts-ignore
toggle.addEventListener('click', () => {
  // @ts-ignore
  if (Object.values(content.classList).indexOf('hidden') !== -1) {
    // @ts-ignore
    content.classList.remove('hidden');
    // @ts-ignore
    content.classList.add('visible');
  } else {
    // @ts-ignore
    content.classList.add('hidden');
    // @ts-ignore
    content.classList.remove('visible');
  }
});