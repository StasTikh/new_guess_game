function guessAlex(){
  let button = document.getElementById("btn");
  let answerF = document.getElementById("answerField");
  let small = document.getElementById("small");
  let big = document.getElementById("big");
  let win = document.getElementById("win");
  let restart = document.getElementById("restartGame");
  let buttonStart = document.getElementById("btnStart");   
  let numGuess = 0;
  let low = 0;
  let high = +document.getElementById("endNum").value;
  console.log(high);
  let maxNumGuess = 10;
  
  if (high >= 200 && high <= 399 ){
    maxNumGuess = 11;
    moreTry.style.display = "block";
    moreTry.innerHTML = `Из-за высокого конечного числа, колличество попыток увеличено до ${maxNumGuess}!`
  } else if (high >= 400 && high <= 599) {
    maxNumGuess = 12;
    moreTry.style.display = "block";
    moreTry.innerHTML = `Из-за высокого конечного числа, колличество попыток увеличено до ${maxNumGuess}!`
  } else if (high >= 600 && high <= 799) {
    maxNumGuess = 13;
    moreTry.style.display = "block";
    moreTry.innerHTML = `Из-за высокого конечного числа, колличество попыток увеличено до ${maxNumGuess}!`
  } else if (high >= 800 && high <= 999) {
    maxNumGuess = 14;
    moreTry.style.display = "block";
    moreTry.innerHTML = `Из-за высокого конечного числа, колличество попыток увеличено до ${maxNumGuess}!`
  } else if (high >= 1000 && high <= 2999) {
    maxNumGuess = 15;
    moreTry.style.display = "block";
    moreTry.innerHTML = `Из-за высокого конечного числа, колличество попыток увеличено до ${maxNumGuess}!`
  } else if (high >= 3000 && high <= 4999) {
    maxNumGuess = 16;
    moreTry.style.display = "block";
    moreTry.innerHTML = `Из-за высокого конечного числа, колличество попыток увеличено до ${maxNumGuess}!`
  } else if (high >= 5000 && high <= 6999) {
    maxNumGuess = 17;
    moreTry.style.display = "block";
    moreTry.innerHTML = `Из-за высокого конечного числа, колличество попыток увеличено до ${maxNumGuess}!`
  } else if (high >= 7000 && high <= 8999) {
    maxNumGuess = 18;
    moreTry.style.display = "block";
    moreTry.innerHTML = `Из-за высокого конечного числа, колличество попыток увеличено до ${maxNumGuess}!`
  } else if (high >= 9000 && high <= 9999) {
    maxNumGuess = 19;
    moreTry.style.display = "block";
    moreTry.innerHTML = `Из-за высокого конечного числа, колличество попыток увеличено до ${maxNumGuess}!`
  } else if (high >= 10000) {
    maxNumGuess = 22;
    moreTry.style.display = "block";
    moreTry.innerHTML = `Из-за высокого конечного числа, колличество попыток увеличено до ${maxNumGuess}!`
  } 

  console.log(maxNumGuess);
    
  buttonStart.style.display = "none";
  button.style.display = "block";
  endNum.style.display = "none";      
    
  let tryA = Math.floor( (low + high)/2 );
  button.addEventListener("click", function(){
    answerF.innerHTML = tryA;
    console.log(tryA);
    button.style.display = "none";
    small.style.display = "block";
    big.style.display = "block";
    win.style.display = "block";
    cardTitle.style.display = "none";
    winField.style.display = "block";
    winField.innerHTML = `Попытка №${numGuess+1}`; 
  }); 
           
  function search(){return Math.floor( (low + high)/2 );}       
  
  small.addEventListener('click', function(){
    high = Number(answerF.innerHTML);
    answerF.innerHTML = search();
    numGuess++;
    console.log (low, high);
    winField.innerHTML = `Попытка №${numGuess+1}`;
    if (numGuess == maxNumGuess) {
      small.style.display = "none";
      big.style.display = "none";
      win.style.display = "none";
      restart.style.display = "block";
      winField.style.display = "block";
      winField.innerHTML = `Попытки закончились, я проиграл!`;    
    } else if( search() == 0) {
      small.style.display = "none";
      big.style.display = "none";
      win.style.display = "none";
      restart.style.display = "block";
      answerF.innerHTML = `Нельзя меньше 1!`;
      winField.style.display = "block";
      winField.innerHTML = `Правила для кого написаны?`;
    } else if(low == high) {
      small.style.display = "none";
      big.style.display = "none";
      win.style.display = "none";
      restart.style.display = "block";
      winField.style.display = "block";
      winField.innerHTML = `Ты уверен, что все делаешь верно?`;
    }
    
  });
      
  big.addEventListener('click', function(){
    low = Number(answerF.innerHTML);    
    answerF.innerHTML = search();
    numGuess++;
    console.log (low, high);
    winField.innerHTML = `Попытка №${numGuess+1}`;
    if (numGuess == maxNumGuess) {
      small.style.display = "none";
      big.style.display = "none";
      win.style.display = "none";
      restart.style.display = "block";
      winField.style.display = "block";
      winField.innerHTML = `Попытки закончились, я проиграл!`;    
    } else if( search() == (high-1)) {
      small.style.display = "none";
      big.style.display = "none";
      win.style.display = "none";
      restart.style.display = "block";
      winField.style.display = "block";
      winField.innerHTML = `О! Ты правда загадал ${high}? Забавно`;
    } else if(low == high) {
      small.style.display = "none";
      big.style.display = "none";
      win.style.display = "none";
      restart.style.display = "block";
      winField.style.display = "block";
      winField.innerHTML = `Ты уверен, что все делаешь верно?`;
    }
    
  });
          
  win.addEventListener("click", function(){
    small.style.display = "none";
    big.style.display = "none";
    this.style.display = "none";
    restart.style.display = "block";
    winField.style.display = "block";    
    winField.innerHTML = `Победа! Я угадал с ${numGuess +1} раза!`;   
  });

  restart.addEventListener("click", function(){
    location.reload();   
  });
     
}


function isNumber() {
  let answer1 = +endNum.value;
  let alert1 = document.getElementById('noNum'); 
    
  if(Number.isNaN(answer1)){
    alert1.style.display = "inline";
    alert1.innerHTML = "Ввод только чисел"    
  } else {
    alert1.style.display = "none";
  }
}



function startGame1() {
  let tag = document.getElementById('dialog1');
  dialogPolyfill.registerDialog(tag);
  tag.showModal();
}

function startGame2() {
  let tag = document.getElementById('dialog2');
  dialogPolyfill.registerDialog(tag);
  tag.showModal();
}

function closeGame() {
  let tag = document.getElementById('dialog1');
  tag.close();
  location.reload(); 
}

function closeGame2() {
  let tag = document.getElementById('dialog2');
  tag.close();
  location.reload(); 
}