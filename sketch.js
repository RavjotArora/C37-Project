var canvas;
var database;
var gameState = 0;
var playerCount = 0;
var game;
var player, question;
var allPlayers;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    game.play();
  }
}
  

