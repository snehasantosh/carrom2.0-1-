




var form;
var button;
var wcoin1,wcoin2,wcoin3,wcoin4,wcoin5,wcoin6,wcoin7,wcoin8,wcoin9;
var bcoin1,bcoin2,bcoin3,bcoin4,bcoin5,bcoin6,bcoin7,bcoin8,bcoin9;
var striker1,striker2;
var hole,hole2,hole3,hole4;
var carrom;
var database;
var rcoin,backimg;
var invisible1,invisible2,invisible3,invisible4;
var game, gameState;
var player, playerCount;
var allPlayers;
count=0;
flag=0;

function preload(){
  carromboardImage = loadImage("carromboard.png");
  wcoinImage = loadImage("whitecoin.png");
  strikerImage = loadImage("Striker.png");
  rcoinImage = loadImage("redcoin.png");
  bcoinImage = loadImage("blackcoin.png");
  backimg=loadImage("background.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight-142);
  database = firebase.database();
  



  gameState = 0

  game = new Game();
  game.getState();
  game.start();

  
}

function draw() {
   





  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    game.play();
  }




  fill("lime")
  textSize(20)
  text(mouseX+":"+mouseY,mouseX,mouseY)


  

}





