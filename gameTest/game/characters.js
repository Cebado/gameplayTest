PLAYER_SPRITES = 20;

var ground = false;
var staticSprite = 1;

var player = {
  sprite: Sprite("player/player"),
  x: 200,
  y: 380,
  width: 30,
  extrawidth: 34,
  height: 96,
  duck: false,
  live: true,
  deathTime: 0,
  frameCount: 0,
  walkingTime: 0,
  lastLook: "right",
  frameLadder: 14,
  draw: function() {
    if(!this.live){
      this.deathTime++;
      if(this.deathTime < 10)
        this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 17);
      else
        this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 18);
    }
    else {

      if((keydown.d || keydown.a) && ground && gravity && !keydown.shift && !keydown.ctrl){
        if(this.walkingTime == 0){
          Sound.play("paso");
          noise.x = this.x;
          noise.y = this.y;
          noise.play = true;
          noise.sound = "paso";
        }
        this.walkingTime++;
        if(this.walkingTime > 15){
          this.walkingTime = 0;
        }
      }
      else {
        this.walkingTime = 0;
        if(noise.sound == "paso")
          noise.play = false;
      }

      this.frameCount++;
      if(!keydown.ctrl && this.duck){
        if(!mustDuck()){
          this.height = 96;
          this.y-=36;
          this.duck=false;
        }
      }

      if(keydown.ctrl && !this.duck){
        this.height = 60;
        this.y+=36;
        this.duck=true;
      }

      if(keydown.d && ground){
        this.lastLook="right";
        if(!keydown.shift && !this.duck){
          if (this.frameCount >= 10)
            this.frameCount = 0;
          if(this.frameCount < 5)
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 4);
          else if(this.frameCount < 10)
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 5);  
        } 
        else if(this.duck){
          if (this.frameCount >= 10)
            this.frameCount = 0;
          if(this.frameCount < 5)
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 9);
          else if(this.frameCount < 10)
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 19);  
        }
        else if(keydown.shift){
          if (this.frameCount >= 16)
            this.frameCount = 0;
          if(this.frameCount < 8)
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 4);
          else if(this.frameCount < 16)
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 5);  
        }      
      }
      else if(keydown.a && ground){
        this.lastLook = "left";
        if(!keydown.shift && !this.duck){
          if (this.frameCount >= 10)
            this.frameCount = 0;
          if(this.frameCount < 5)
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 6);
          else if(this.frameCount < 10)
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 7);  
        } 
        else if(this.duck){
          if (this.frameCount >= 10)
            this.frameCount = 0;
          if(this.frameCount < 5)
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 10);
          else if(this.frameCount < 10)
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 11);  
        }
        else if(keydown.shift){
          if (this.frameCount >= 16)
            this.frameCount = 0;
          if(this.frameCount < 8)
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 6);
          else if(this.frameCount < 16)
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 7);  
        }      
      }
      else if(this.duck && !keydown.a && !keydown.d){
        this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 8);
      }
      else if(keydown.w && ladderPlayer()){
        if (this.frameCount >= 16)
            this.frameCount = 0;
          if(this.frameCount < 8){
            this.frameLadder = 14;
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 14);
          }
          else if(this.frameCount < 16){
            this.frameLadder = 15;
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 15);
          }
      }
      else if(keydown.s && ladderPlayer()){
        if (this.frameCount >= 16)
            this.frameCount = 0;
          if(this.frameCount < 8){
            this.frameLadder = 15;
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 15);
          }
          else if(this.frameCount < 16){
            this.frameLadder = 14;
            this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 14);
          }
      }
      else if(!ground && gravity){
        if(keydown.a)
          this.lastLook = "left";
        else if(keydown.d)
          this.lastLook = "right";
        if(this.lastLook == "right")
          this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 12);
        else
          this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 13);
      }
      else if(keydown.e){
        if (this.lastLook == "right")
          this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 20);
        else
          this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, 16);
      }
      else{
        if(!gravity && ladderPlayer() && !groundPlayer())
          this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, this.frameLadder);
        else {
          if (this.frameCount >= 40){
            staticSprite = getRandomInt(1,3);
            this.frameCount = 0;
          }
          this.sprite.draw(canvas, this.x - this.extrawidth/2, this.y, PLAYER_SPRITES, staticSprite);
        }
      }
    }

  }
};

function ladderPlayer(){
  for(var i = 0; i < ladder.length; i++){
    if(collides(player, ladder[i]))
      return true;
  }
  return false;
}

function groundPlayer(){
  for(var i = 0; i < scenario.length; i++){
    if(collidesLadder(player, scenario[i]))
      return true;
  }
  return false;
}

function mustDuck(){
  for(var i = 0; i < scenario.length; i++){
    if(collidesDuck(player.x, player.y - 36, player.width, 36, scenario[i]))
      return true;
  }
  for(var i = 0; i < box.length; i++){
    if(collidesDuck(player.x, player.y - 36, player.width, 36, box[i]))
      return true;
  }
  return false;
}

function collidesDuck(x, y, width, height, b) {
  return x < b.x + b.width &&
         x + width > b.x &&
         y < b.y + b.height &&
         y + height > b.y;
}
