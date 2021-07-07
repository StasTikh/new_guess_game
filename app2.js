function game(){
    let button = document.getElementById("btn2");
    let answerF = document.getElementById("answerField2");
    let small = document.getElementById("small2");
    let big = document.getElementById("big2");
    let win = document.getElementById("win2");
    let restart = document.getElementById("restartGame2");  
    let numGuess = 0;
    let low = 0;
    let high = 101;
    let tryA = Math.floor( (low + high)/2 );
  
    button.addEventListener("click", function(){
      answerF.innerHTML = tryA;
      button.style.display = "none";
      small.style.display = "block";
      big.style.display = "block";
      win.style.display = "block";
    }); 
        
    
    
    
    function search(){return Math.floor( (low + high)/2 );}       

    
    small.addEventListener('click', function(){
        high = Number(answerF.innerHTML);
        answerF.innerHTML = search();
        numGuess++;
        console.log (low, high);
        if (numGuess == 10) {
          small.style.display = "none";
          big.style.display = "none";
          win.style.display = "none";
          restart.style.display = "block";
          document.getElementById("winField2").innerHTML = `Попытки закончились, я проиграл!`;    
        } else if( search() == 0) {
          small.style.display = "none";
          big.style.display = "none";
          win.style.display = "none";
          restart.style.display = "block";
          answerF.innerHTML = `Нельзя меньше 1!`;
          document.getElementById("winField2").innerHTML = `Правила для кого написаны?`;
        }   else if(low == high) {
          small.style.display = "none";
          big.style.display = "none";
          win.style.display = "none";
          restart.style.display = "block";
          document.getElementById("winField2").innerHTML = `Ты уверен, что все делаешь верно?`;
        }
      });
      
      big.addEventListener('click', function(){
        low = Number(answerF.innerHTML);    
        answerF.innerHTML = search();
        numGuess++;
        console.log (low, high);
        if (numGuess == 10) {
          small.style.display = "none";
          big.style.display = "none";
          win.style.display = "none";
          restart.style.display = "block";
          document.getElementById("winField2").innerHTML = `Попытки закончились, я проиграл!`;    
        } else if( search() == 100) {
          small.style.display = "none";
          big.style.display = "none";
          win.style.display = "none";
          restart.style.display = "block";
          document.getElementById("winField2").innerHTML = `О! Ты правда загадал 100? Это редкость`;
        } else if(low == high || (high - low) == 1) {
          small.style.display = "none";
          big.style.display = "none";
          win.style.display = "none";
          restart.style.display = "block";
          document.getElementById("winField2").innerHTML = `Ты уверен, что все делаешь верно?`;
        }  
      });

      
    
    win.addEventListener("click", function(){
        small.style.display = "none";
        big.style.display = "none";
        this.style.display = "none";
        restart.style.display = "block";    
        document.getElementById("winField2").innerHTML = `Победа! Я угадал с ${numGuess +1} раза!`;   
      });

    restart.addEventListener("click", function(){
        location.reload();   
      });
     
  }