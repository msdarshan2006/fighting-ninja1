var database;
var gameState = 0 ;
var ground;
var player1,player2;
var plf1,plb1,pli1;
var plf2,plb2,pli2;

var formObj,gameObj;
var playerCount = 0;

function preload(){
plf1 = loadAnimation("images/run/player1.png","images/run/player2.png","images/run/player3.png");
plb1 = loadAnimation("images/run/player3.png","images/run/player2.png","images/run/player1.png");
pli1 = loadImage("images/run/player1.png");
// to do animation for player 2
plf2 = loadAnimation("images/run/player1.png","images/run/player2.png","images/run/player3.png");
plb2 = loadAnimation("images/run/player3.png","images/run/player2.png","images/run/player1.png");
pli2 = loadImage("images/run/player1.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  gameObj = new Game();
  gameObj.getGameState();
  console.log(gameState);
  gameObj.startGame();
  


 
}


function draw() {
  background(255,255,255);  
  if(playerCount===2){
    //gamestate should be updated in fbc
    gameObj.updateGameState(1);
  }
  if(gameState===1){
    clear();
    gameObj.playGame();

  }

}