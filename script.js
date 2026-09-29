// JavaScript
console.log('Hello world!');

const btn = document.querySelector('#btn');
const text = document.querySelector('#text')

// ボタンがクリックされたら、動作させる
btn.addEventListener('click', () => {
    // bodyにクラス名を付ける、または外す
  document.body.classList.toggle('black');
    // テキストを書き換える
  // もし、bodyにクラス名blackがついていたら
  if (document.body.classList.contains('black')) {
    text.textContent = 'Dark mode';
  } else {
    text.textContent = 'Light mode';
  }
});

const btnA = document.querySelector('#btn-a');
const btnB = document.querySelector('#btn-b');
const btnC = document.querySelector('#btn-c');

btnA.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme','color-a');
});

btnB.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme','color-b');
});

btnC.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme','color-c');
});

