function gameEngine(){
    //part 1: updating the snake array and food
    
    if(isCollide(snakeArr)){
        gameOverSnd.play();
        bgmusic.pause();
        inputDir={x:0,y:0};
        alert("Game Over. Press any key to play again!");
        snakeArr=[{x:13,y:15}];
        bgmusic.play();
        score=0;
       
    }
    //if you have eaten the food, increment the score and regenerate the food
    if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
        foodSnd.play();
        score+=1;
        if(score>hiscoreval){
            hiscoreval=score;
            localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML="High Score: "+hiscoreval;
        }
        scoreBox.innerHTML="Score: "+score;
        snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y});
        let a=2;
        let b=16;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
    }
    //moving the snake
    for(let i=snakeArr.length-2;i>=0;i--){
       
        snakeArr[i+1]={...snakeArr[i]};
    }
    snakeArr[0].x+=inputDir.x;
    snakeArr[0].y+=inputDir.y;
    


    //part 2: display the snake and food
    //display the snake
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        // snakeElement.classList.add('snake');
        if(index===0){
            snakeElement.classList.add('head');
        }else{
           snakeElement.classList.add('snake');
        }

        board.appendChild(snakeElement);
    });
    //display the food
    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;

    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);


}