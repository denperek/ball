let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');
let elem = document.querySelector('.box');
let timer;
let posX = 0;
let posY = 100;
 
function rightTop() {
  timer = setInterval(function () {
    if (posX == 300 || posX == 300 && posY == 0) {
  clearInterval(timer); 
  leftTop();  
      } else if (posY == 0 && posX != 300) {
        clearInterval(timer);
        rightDown();
      } else {
      elem.style.top = --posY + 'px';   // go top
      elem.style.left = ++posX + 'px';  // and right
    }
  }, 10);
 
}
 
function rightDown() {
  timer = setInterval(function () {
    if (posX == 300 || posY == 300) {
      clearInterval(timer);  
      rightTop();  
        } else {
    elem.style.top = ++posY + 'px';
    elem.style.left = ++posX + 'px';
        }
  }, 10);
 
}
 
function leftTop() {
  timer = setInterval(function () {
    if (posX == 0 || posY == 0) {
      clearInterval(timer);
      leftDown();    
        } else {
    elem.style.top = --posY + 'px';
    elem.style.left = --posX + 'px';
        }
  }, 10);
 
}
 
function leftDown() {
  timer = setInterval(function () {
    if (posX == 0 || posY == 300) {
      clearInterval(timer); 
      rightDown();   
        } else {
    elem.style.top = ++posY + 'px';
    elem.style.left = --posX + 'px';
  }
  }, 10);
 
}
//-----------------------------------------------------
 
function myAnimation() {
  
    rightTop();
 
 
}
 
function stop() {
  clearInterval(timer);
 
}
 
function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
 
btn.addEventListener('click', myAnimation);
btn2.addEventListener('click', stop);