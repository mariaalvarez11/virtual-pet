//Create variables here

var dog1;
var dog2;

var database;
var foodS;
var foodStock;

function preload(){
  dogImage = loadImage("images/dogImg.png");
  dogImage2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  console.log(database);

  dog1 = createSprite(250,250);
  dog1.addImage(dogImage);
  dog1.scale = 0.1

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog1.addImage(dogImage2);
  }

  text("Food left: " + foodS,100,100);
  drawSprites();
  //add styles here

}

function readStock(data) {
  foodS=data.val();
}

function writeStock(x) {
  if(x<0) {
    x=0
  } else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}


