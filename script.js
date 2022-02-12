let phrases = [{
    text: "поглазеть на пингвинов в музее Арктики и Антарктики",
    image: 'arctic.jpg'
  },
  {
    text: "зайти в кофейню Gotcha!Brew bar в парадной!!!",
    image: 'gotcha.jpg'
  },
  {
    text: "посидеть в кафе - джунглях Jungle",
    image: 'jungle.jpg'
  },
  {
    text: "заценить необычные десерты Анны Красовской",
    image: 'dessert.jpg'
  },
  {
    text: "сьесть по круаcсану в o'petit с видом на Невский",
    image: 'opetit.jpg'
  },
  {
    text: "взять крем-брюле и печеньки с солью в кофейне Щегол",
    image: 'schegol.jpg'
  },
  {
    text: "поесть мексиканской еды в Bros Burritos",
    image: 'burritos.jpg'
  },
  {
    text: "разведать коворкинг в Ясной поляне",
    image: 'koworkin.jpg'
  },
  {
    text: "собрать свою пасту в Pasta Fresca",
    image: 'fresca.jpg'
  },
  {
    text: "попробовать весь шоколад в Chocolate Bar Secret Garden",
    image: 'chocobar.jpg'
  },
  {
    text: "сфоткать все неоновые вывески в Neon Coffee",
    image: 'neon.jpg'
  },
  {
    text: 'присоединиться к Обществу Чистых Тарелок',
    image: 'plates.jpg'
  },
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
};

let button = document.querySelector('.button');
let image = document.querySelector('.image');
let phrase = document.querySelector('.phrase');

function getRandom() {
  let randomElement = getRandomElement(phrases);
  phrase.textContent = randomElement.text;
  image.setAttribute('src', randomElement.image);
};

button.addEventListener('click', getRandom);


// function getRandomElement(arr) {
//   let randIndex = Math.floor(Math.random() * arr.length);
//   return arr[randIndex];
// }

// console.log(getRandomElement(phrases));

// let button = document.querySelector('.button');
// let phrase = document.querySelector('.phrase');
// let advice = document.querySelector('.advice');
// let image = document.querySelector('.image');

// // добавить квериселектор к логотипу и чтото там поменять чтобы разнгые логотипы вылезали например разных цветов /

// function getRandom() {
//   let randomElement = getRandomElement(phrases);
//   phrase.textContent = randomElement.text;
//   image.setAttribute('src', randomElement.image);

//   // let src = image.getAttribute('src')
//   // console.log(src)
//   // let a = document.createElement('a')
//   // a.href = src
//   // a.text = src
//   // try {
//   //   advice.querySelector('a').remove()
//   // } catch (error) {}
//   // if (advice.querySelector('a')) {
//   //   advice.querySelector('a').remove()
// }
// // advice.appendChild(a)

// button.addEventListener('click', getRandom);