(function(){
    let button = document.getElementById("btn");
    let answerF = document.getElementById("answerField");
    let small = document.getElementById("small");
    let big = document.getElementById("big");
    let win = document.getElementById("win");
    let restart = document.getElementById("restartGame");  
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
      });
      
      big.addEventListener('click', function(){
        low = Number(answerF.innerHTML);    
        answerF.innerHTML = search();
        numGuess++;
      });
    
    win.addEventListener("click", function(){
        small.style.display = "none";
        big.style.display = "none";
        this.style.display = "none";
        restart.style.display = "block";    
        document.getElementById("winField").innerHTML = `Победа! угадал за ${numGuess +1} попыток!`;   
      });

    restart.addEventListener("click", function(){
        location.reload();   
      });
     
  })();
