//Game Constants & variables
let inputDir = { x: 0, y: 0 };
const eatingSound = new Audio("eating.mp3");
const gameStart = new Audio("gamestart.mp3");
const gameout = new Audio("out.mp3");
const gamemove = new Audio("gamemove.mp3")
let score = 0;
let speed = 6;
let lastpaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
food = { x: 6, y: 7 };

//Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    //console.log(ctime);
    if((ctime - lastpaintTime)/1000 < 1 /speed) {
        return;
    }
    lastpaintTime = ctime;
    gameEngine();
}
function isCollide(snake){
    //if you out into yourself
    for(let i = 1; i <snakeArr.length; i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    // if you out to the wall
        if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
            return true;
        }
    }


function gameEngine() {
    // part 1: updating the snake array & food
    if(isCollide(snakeArr)){
        gameout.play();
        gamemove.pause();
        inputDir = {x: 0, y: 0};
        alert("Game Over.Press any key to play again!");
        snakeArr = [{x: 13, y: 15}];
        gamemove.play();
        score = 0;
    }
     //if you have eaten the food, increment the score and regenerate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
        eatingSound.play()
        score +=1;
        scoreBox.innerHTML = "score :" + score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }

    //moving the snake
    for(let i = snakeArr.length - 2; i>=0;  i--){
        snakeArr[i+1] = {...snakeArr[i]};
    }
    
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    // part 2: Display the snake and food
    // Display the snake 

    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0) {
            snakeElement.classList.add("head");
        }
        else {
            snakeElement.classList.add("snake");
        }
        board.appendChild(snakeElement);
    });
    //Display the food
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food")
    board.appendChild(foodElement);
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 }//start the game
    gameStart.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x = 0;
            inputDir.y = 1;
            break; 

        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x = -1;
            inputDir.y = 0;
           break;

        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});
























































































































