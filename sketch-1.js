//background
var bg=createSprite(200,110,100,100);
bg.setAnimation("background");
bg.setCollider("rectangle",-15,0,0,155,0);
var blocker=createSprite(106,200,60,1000);
blocker.visible=false;
bg.scale=4;

var bg2=createSprite(220,200,1,1);
bg2.setCollider("rectangle",115,0,100,100000,0);

//finish
var finish=createSprite(210,-40);
finish.setAnimation("finish");
finish.visible=false;
finish.scale=1.9;
finish.setCollider("rectangle",0,-30,70,20);

//player
var p = createSprite(180,200,10,10);
p.setCollider("rectangle",0,0,85,155,0);
p.setAnimation("car_red_1");
p.scale=0.5;

//opponent
var e=createSprite(250,200,10,10);
e.setAnimation("car_yellow_1");
e.scale=0.5;
e.setCollider("rectangle",0,0,85,155,0);

//shop stuff
var hublock=createSprite(0,0,200,70);
hublock.visible=false;
var coins=1000;
var red=createSprite(65,80);
var yellow=createSprite(335,80);
var blue=createSprite(65,250);
var black=createSprite(335,250);
var disGroup=new Group();
disGroup.add(red);
disGroup.add(yellow);
disGroup.add(blue);
disGroup.add(black);
red.setAnimation("car_red_1");
yellow.setAnimation("car_yellow_1");
blue.setAnimation("car_blue_1");
black.setAnimation("car_black_1");
disGroup.setVisibleEach(false);
disGroup.setScaleEach(0.7);

var rede=createSprite(75,137,80,20);
var yellowe=createSprite(335,135,80,20);
var bluee=createSprite(65,305,80,20);
var blacke=createSprite(335,310,80,20);
rede.visible=false;
yellowe.visible=false;
bluee.visible=false;
blacke.visible=false;

//countdown
var a3=createSprite(220,100);
a3.setAnimation("animation_2");
a3.scale=4;
a3.visible=false;
var a2=createSprite(240,100);
a2.setAnimation("animation_3");
a2.scale=4;
a2.visible=false;
var a1=createSprite(220,100);
a1.setAnimation("animation_4");
a1.scale=4;
a1.visible=false;
var go=createSprite(230,100);
go.setAnimation("animation_5");
go.scale=4;
go.visible=false;

//buttons
var playblock=createSprite(275,260,100,40);
var shopblock=createSprite(115,260,100,40);
var howtoblock=createSprite(200,305,100,40);
var eezie=createSprite(85,230,100,40);
var medium=createSprite(213,230,150,40);
var hard=createSprite(345,230,100,40);

//spam and ai
var spam=0;
var b=20;
var c=5;
var rand;
var rand2;
var aispam=0;
var spam1=createSprite(320,360,20,10);
var spam2=createSprite(340,360,20,10);
var spam3=createSprite(360,360,20,10);
var spam4=createSprite(380,360,20,10);
spam1.shapeColor="red";
spam2.shapeColor="red";
spam3.shapeColor="red";
spam4.shapeColor="red";

//states and groups
var s="true";
var gameState="hub";
var f="true";
var countState=3;
var a;
var diff;
var carState="red";
var yellowbuyState="false";
var bluebuyState="false";
var blackbuyState="false";
var buttonsG =new Group();
buttonsG.add(playblock);
buttonsG.add(shopblock);
buttonsG.add(eezie);
buttonsG.add(medium);
buttonsG.add(hard);



//button
var resetblock=createSprite(210,215,100,40);
resetblock.visible=false;
buttonsG.add(resetblock);

//music
playSound("sound://category_background/eerie_beginnings.mp3");

function draw() {
  background("white");
  stroke("blue");
  textFont("Baskerville Old Face");
  buttonsG.setVisibleEach(false);
  shopblock.visible=false;
  playblock.visible=false;
  howtoblock.visible=false;
  eezie.visible=false;
  medium.visible=false;
  hard.visible=false;
  a1.visible=false;
  a2.visible=false;
  a3.visible=false;
  go.visible=false;
  bg.visible=true;
  bg2.visible=false;
  p.visible=false;
  e.visible=false;
  text("hello",200,200);
  spam1.visible=false;
  spam2.visible=false;
  spam3.visible=false;
  spam4.visible=false;
  blocker.visible=false;
  p.collide(e);
  p.collide(bg);
  p.collide(bg2);
  e.collide(bg);
  e.collide(bg2);
  p.collide(blocker);
  e.collide(blocker);
  if(gameState!="shop"){
    disGroup.setVisibleEach(false);
  }
  if(gameState!="hub"&&gameState!="choose"&&gameState!="shop"){
    bg.visible=true;
    bg2.visible=true;
    p.visible=true;
    e.visible=true;
    if(carState==="yellow"){
      spam1.visible=true;
      spam2.visible=true;
      spam3.visible=true;
      spam4.visible=false;
      spam4.visible=false;
    }

    if(carState==="red"){
      spam1.visible=true;
      spam2.visible=true;
      spam3.visible=true;
      spam4.visible=true;
    }
    
    if(carState==="blue"){
      spam1.visible=true;
      spam2.visible=true;
      spam3.visible=false;
      spam4.visible=false;
    }
    if(carState==="black"){
      spam1.visible=true;
      spam2.visible=false;
      spam3.visible=false;
      spam4.visible=false;
    }
    }

  if(bg.y===270){
    bg.y=110;
  }
  if(gameState==="play" || gameState==="shop"||gameState==="hub" ||gameState==="choose"){
    bg.y=bg.y+4;
  }
  
  if(keyDown("k")){
    console.log(aispam);
  }
  if(keyDown("j")){
    console.log(a);
  }
  if(keyDown("p")){
    console.log(e.y);
  }
  if(keyDown("g")){
    debug();
  }
  if(keyDown("h")){
    console.log(spam);
  }
  if(carState==="red"){
    b=20;
  }
  if(carState==="yellow"){
    b=15;
  }
  if(carState==="blue"){
    b=10;
  }
  if(carState==="black"){
    b=5;
  }


  movementandspam();
  Countdown();
  drawSprites();
  AI();
  winorlose();
  hub();
  shop();
  
  if(gameState!="hub"){
    textSize(20);
    fill("blue");
    text("<-HUB",10,20);
  }
  if(mousePressedOver(hublock) && gameState!="hub"){
    reset();
    gameState="hub";
    playSound("sound://category_bell/quiet_belloctave_notification.mp3");

  
}
}
//creating functions

function hub(){
  if(gameState==="hub"){
    p.visible=false;
    e.visible=false;
    spam1.visible=false;
    spam2.visible=false;
    spam3.visible=false;
    spam4.visible=false;
    bg.visible=true;
    fill("blue");
    textSize(35);
    text("SPAM RACING",100,85);
    text("COINS="+ coins,130,175);
    text("PLAY",235,275);
    text("SHOP",75,275);
    textSize(20);
    text("HOW TO PLAY",150,300);
    if(mousePressedOver(playblock)){
      gameState="choose";
      playSound("sound://category_bell/quiet_belloctave_notification.mp3");
      
    }
    if(mousePressedOver(shopblock)){
      gameState="shop";
      playSound("sound://category_bell/quiet_belloctave_notification.mp3");

    }
  }
  if(gameState==="choose"){

    fill("blue");
    textSize(30);
    text("CHOOSE DIFFICULTY",50,80);
    text("EEZIE", 45,240);
    text("MEDIUM",150,240);
    text("HARD",300,240);
    if(mousePressedOver(eezie)){
      diff=1;
      playSound("sound://category_bell/quiet_belloctave_notification.mp3");
      gameState="start";
    }
    if(mousePressedOver(medium)){
      diff=2;
      playSound("sound://category_bell/quiet_belloctave_notification.mp3");
      gameState="start";
    }
    if(mousePressedOver(hard)){
      diff=3;
      playSound("sound://category_bell/quiet_belloctave_notification.mp3");
      gameState="start";
    }
  }
}

function shop(){
  if(gameState==="shop"){
    p.visible=false;
    e.visible=false;
    spam1.visible=false;
    spam2.visible=false;
    spam3.visible=false;
    spam4.visible=false;
    bg.visible=true;
    disGroup.setVisibleEach(true);
    fill("blue");
    textSize(20);
    
    text("No Special Abilities",25,175);
    
    if(yellowbuyState==="false"){
    text("Buy-20",310,145);
    }
    text("Lesser spam",290,175);
    
    if(bluebuyState==="false"){
      text("Buy-30",45,310);
    }
    
    text("Even Lesser Spam", 25,340);
    
    if(blackbuyState==="false"){
      text("Buy-50",310,315);
    }
    
    textSize(15);
    text("EVEN LESSER SPAM!!",250,340);
    if(mousePressedOver(yellowe) && yellowbuyState==="false"&& coins>20){
      yellowbuyState="true";
      carState="yellow";
      p.setAnimation("car_yellow_1");
      playSound("sound://category_bell/quiet_belloctave_notification.mp3");
      coins=coins-20;
    }
      
    if(mousePressedOver(bluee) && bluebuyState==="false" && coins>30){
      bluebuyState="true";
      carState="blue";
      p.setAnimation("car_blue_1");
      playSound("sound://category_bell/quiet_belloctave_notification.mp3");
      coins=coins-30;
    }
    
    if(mousePressedOver(blacke) && blackbuyState==="false" && coins>50){
      blackbuyState="true";
      carState="black";
      p.setAnimation("car_black_1");
      playSound("sound://category_bell/quiet_belloctave_notification.mp3");
      coins=coins-50;
    }
  
    if(carState==="red"){
      text("Equipped",40,145);
      p.setAnimation("car_red_1");
    }
    else{
      text("Equip",40,145);
    }
    
    if(carState==="yellow" && yellowbuyState==="true"){
      text("Equipped",310,145); 
      p.setAnimation("car_yellow_1");
    }else if(yellowbuyState==="true"){
      text("Equip",310,145);
    }
    
    if(carState==="blue" && bluebuyState==="true"){
      text("Equipped",45,310);
      p.setAnimation("car_blue_1");
      
    }else if(bluebuyState==="true"){
      text("Equip",45,310);
    }
    
    if(carState==="black" && blackbuyState==="true"){
      text("Equipped", 310,315);
      p.setAnimation("car_black_1");
      
    }else if(blackbuyState==="true"){
    text("Equip", 310,315);
    }
    
    if(mousePressedOver(rede)){
      carState="red";
      playSound("sound://category_bell/quiet_belloctave_notification.mp3");

    }
    if(mousePressedOver(yellowe) && yellowbuyState==="true"){
      carState="yellow";
      playSound("sound://category_bell/quiet_belloctave_notification.mp3");
    }
    if(mousePressedOver(bluee) && bluebuyState==="true"){
      carState="blue";
      playSound("sound://category_bell/quiet_belloctave_notification.mp3");
    }
    if(mousePressedOver(blacke) && blackbuyState==="true"){
      carState="black";
      playSound("sound://category_bell/quiet_belloctave_notification.mp3");
    }
    
  }
}

function movementandspam(){
  s="true";

    if(carState==="red"){
    p.setAnimation("car_red_1_copy_1");
    }
    if(diff===1){
      e.setAnimation("car_yellow_1_copy_1");
    }
    if(diff===2){
      e.setAnimation("car_blue_1");
    }
    if(diff===3){
      e.setAnimation("car_black_1");
    }
    
  if(gameState==="play"){
  if(keyDown("right")||keyDown("d")){
    p.x=p.x+1;
  }
  if(keyDown("left")||keyDown("a")){
    p.x=p.x-1;
  }
 if(keyWentDown("space")){
   spam=spam+1;
 }
 if(spam===b){
   if(keyWentDown("space")){
   p.y=p.y-20;
   playSound("sound://category_alerts/retro_game_alert_3.mp3");
   spam=0;
   spam1.shapeColor="red";
   spam2.shapeColor="red";
   spam3.shapeColor="red";
   spam4.shapeColor="red";
   }
   
 }

 
 if(keyDown("down")||keyDown("s")){
   p.y=p.y+1;
 }
 if(keyDown("r")){
   s="false";
 }
    if(p.isTouching(e)||e.isTouching(p)){
      if(e.y===p.y){
        s="false";
      }
      
    }
  if(p.isTouching(e) && s==="true"){
    if(p.y<=e.y){
      e.y=e.y+0.6;
    }
    if(e.y<=p.y){
      p.y=p.y+0.6;
    }}

  
    if(keyWentUp("up")){
     p.setAnimation("car_red_1");
     e.setAnimation("car_yellow_1");
     }
  }
  

if(spam===4){
  spam1.shapeColor="lightgreen";
}
if(spam===9){
  spam2.shapeColor="lightgreen";
}
if(spam===14){
  spam3.shapeColor="lightgreen";
}
if(spam===19){
  spam4.shapeColor="lightgreen";
}
}

function AI(){
  if(gameState==="play"){
    if(diff===2){
      a=30;
    }
    if(diff===1){
      a=50;
    }
    if(diff===3){
      a=10;
    }
    if(e.y<p.y){
        rand2=Math.round(random(1,6));
        if(p.x<e.x){
  
            switch(rand2){
              case 1: e.x=e.x-1;
                      break;
              case 2:e.x=e.x-1;
                      break;
              default:break;
            
            }
          
        }
        if(p.x>e.x){
  
            switch(rand2){
              case 1: e.x=e.x+1;
                      break;
              case 2:e.x=e.x+1;
                      break;
              default:break;
            
            }
          
        }
        
      }
  
      rand=Math.round(randomNumber(1,10));
      if(World.frameCount%1===0){
          //console.log(aispam);
  
        switch(rand){
          case 1: aispam=aispam+2;
                break;
          case 2:aispam=aispam+2;
                break;
          default:break;
        }
      }
  
    
    if(aispam===a){
  
      e.y=e.y-20;
      playSound("sound://category_alerts/retro_game_alert_2.mp3");
      aispam=aispam+1;
      aispam=0;
      }
    }
  }

function debug(){
  playblock.debug=true;
  shopblock.debug=true;
  eezie.debug=true;
  medium.debug=true;
  hard.debug=true;
  p.debug=true;
  e.debug=true;
  bg.debug=true;
  bg2.debug=true;
  finish.debug=true;
  blocker.debug=true;

  
}

function winorlose(){
  if(e.y<60|p.y<60){
    if(e.isTouching(finish)||p.isTouching(finish)){
      f="false";
      gameState="end";
    }
    if(f==="true"){
      finish.visible=true;
      finish.velocityY=3;
    }else if(f==="false"){
      textSize(25);
      fill("blue");
      text("RESET", 169, 210);
      if(p.isTouching(finish)){
        text("YOU WIN!",160,160);
      }
      if(e.isTouching(finish)){
        text("YOU LOSE!",160,160);
      }
      gameState="end";
      finish.velocityY=0;
      if(mousePressedOver(resetblock)){
        playSound("sound://category_bell/quiet_belloctave_notification.mp3");
        reset();
      }
      if(keyDown("r")){
        playSound("sound://category_bell/quiet_belloctave_notification.mp3");
        reset();
      }
    }
  }
}

function Countdown(){
if(gameState==="start"){
  if(countState===3){
    a3.visible=true;
    if(World.frameCount%25===0){
      countState=2;
    }
  }
  
  if(countState===2){
    a2.visible=true;
    if(World.frameCount%50===0){
      countState=1;
    }
  }
  if(countState===1){
  a1.visible=true;
  if(World.frameCount%75===0){
    countState=0;
  }
  }
  if(countState===0){
    go.visible=true;
    if(World.frameCount%100===0){
      countState=-1;
      gameState="play";
    }
  }
  }
}

function reset(){
  
  finish.y=-40;
  finish.visible=false;
  gameState="start";
  countState=3;
  s=0;
  spam=0;
  aispam=0;
  p.y=200;
  p.x=180;
  e.y=200;
  e.x=250;
  spam1.shapeColor="red";
  spam2.shapeColor="red";
  spam3.shapeColor="red";
  spam3.shapeColor="red";
  
}

// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// I want to reach 700 lol
// reached 700 yaay