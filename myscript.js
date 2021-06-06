const dropDownMenu = document.getElementById('dropDownMenu');
const dropDownItems = document.getElementById('dropDownItems');
const dropDownHeader = document.getElementById('dropDownHeader');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const frame = document.querySelector('.frame');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const timer = 5000;
const size = 800;
let counter = 1;
let myTimer;

function displayMenu(menu, menuItems) {
  menu.addEventListener('mouseenter', () => {
    menuItems.classList.add('visible');
  });
}

function hideMenu(menu, menuItems) {
  menu.addEventListener('mouseleave', () => {
    menuItems.classList.remove('visible');
  });
}

function pageLoad() {
  frame.style.transform = `translateX(${-size * counter}px)`;
}

function setTimer() {
  myTimer = setInterval(() => {
    if (counter <= 3) {
      frame.style.transition = 'transform 1s ease-in-out';
      counter++;
      frame.style.transform = `translateX(${-size * counter}px)`;
    }
  }, timer);
}

leftButton.addEventListener('click', () => {
  if (counter >= 1) {
    frame.style.transition = 'transform 1s ease-in-out';
    counter--;
    frame.style.transform = `translateX(${-size * counter}px)`;
    clearInterval(myTimer);
    setTimer();
  }
});
rightButton.addEventListener('click', () => {
  if (counter <= 3) {
    frame.style.transition = 'transform 1s ease-in-out';
    counter++;
    frame.style.transform = `translateX(${-size * counter}px)`;
    clearInterval(myTimer);
    setTimer();
  }
});

frame.addEventListener('transitionend', () => {
  if (counter === 0) {
    console.log('Last Image');
    counter = 3;
    frame.style.transitionProperty = 'none';
    frame.style.transform = `translateX(${-size * counter}px)`;
  } else if (counter === 4) {
    console.log('First Image');
    counter = 1;
    frame.style.transitionProperty = 'none';
    frame.style.transform = `translateX(${-size * counter}px)`;
  }
});

function imageSelectors(img, position) {
  img.addEventListener('click', () => {
    counter = position;
    frame.style.transitionProperty = 'none';
    frame.style.transform = `translateX(${-size * counter}px)`;
    clearInterval(myTimer);
    setTimer();
  });
}

function changeDot(button, position, other1, other2) {
  frame.addEventListener('transitionend', () => {
    if (counter === position) {
      other1.style.backgroundColor = 'transparent';
      other2.style.backgroundColor = 'transparent';
      button.style.backgroundColor = 'black';
      button.style.opacity = '0.5';
    }
  });
}

function selectDot(button, other1, other2) {
  button.addEventListener('click', () => {
    other1.style.backgroundColor = 'transparent';
    other2.style.backgroundColor = 'transparent';
    button.style.backgroundColor = 'black';
    button.style.opacity = '0.5';
  });
}

function dotHover(button, position) {
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = 'black';
    button.style.opacity = '0.5';
  });
  button.addEventListener('mouseleave', () => {
    console.log(counter);
    if (counter === position) {
      button.style.backgroundColor = 'black';
      button.style.opacity = '0.5';
    } else {
      button.style.backgroundColor = 'transparent';
    }
  });
}

displayMenu(dropDownHeader, dropDownItems);
hideMenu(dropDownMenu, dropDownItems);
pageLoad();
setTimer();
dotHover(img1, 0);
dotHover(img1, 1);
dotHover(img2, 2);
dotHover(img3, 3);
dotHover(img3, 4);

selectDot(img1, img2, img3);
selectDot(img2, img1, img3);
selectDot(img3, img1, img2);

changeDot(img1, 0, img2, img3);
changeDot(img1, 1, img2, img3);
changeDot(img2, 2, img1, img3);
changeDot(img3, 3, img1, img2);
changeDot(img3, 4, img1, img2);

imageSelectors(img1, 1);
imageSelectors(img2, 2);
imageSelectors(img3, 3);
