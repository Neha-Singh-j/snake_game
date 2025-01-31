let inputDir={x:0,y:0};
const foodSnd=new Audio('../assests/eat.wav');
const gameOverSnd=new Audio('../assests/endgame.mp3');
const moveSnd=new Audio('../assests/turn.wav');
const bgmusic=new Audio('../assests/bg.mp3');

let speed=5;
let score=0;
let lastPaintTime=0;
let snakeArr=[ 
    {x:13,y:15}
];
let food={x:7,y:15};
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}


//main logic starts here
let hiscore=localStorage.getItem("hiscore");
if(hiscore===null){
    hiscoreval=0;
    localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
}
else{
    hiscoreval=JSON.parse(hiscore);
    hiscoreBox.innerHTML="High Score: "+hiscore;
}   


window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1};
    moveSnd.play();
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=1;
            inputDir.y=0;
            break;
        default:
            break;
    }
});


// const board = document.getElementById('board');
//       for (let row = 0; row < 18; row++) {
//         for (let col = 0; col < 18; col++) {
//           const cell = document.createElement('div');
//           cell.classList.add('cell');
//           // Add 'black' or 'white' class based on chessboard pattern logic
//           if ((row + col) % 2 === 0) {
//             cell.classList.add('white');
//           } else {
//             cell.classList.add('black');
//           }
//           board.appendChild(cell);
//         }
//       }