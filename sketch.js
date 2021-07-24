var dog, happyDog, database, foodS, foodStock;
var dogImg, happyDogImg;

function preload()
{
	dogImg = loadImage("Dog.png");
  happyDogImg = loadImage("happydog.png");

}

function setup() {

  database = firebase.database();
  console.log(database);

	createCanvas(500, 500);
  
  dog = createSprite(100,400);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  
  drawSprites();
  //add styles here
  
  fill("white");
  textSize(25);
  stroke("brown");
  text(foodS,100,100);

  // if(foodS = 0){
  //   dog.changeImage(dogImg);
  // }


}

function readStock(data){
  foodS = data.val();
  
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  }
  else{
    x = x - 1;
  }
  database.ref('/').update({
    
    Food:x
    
  })
}



