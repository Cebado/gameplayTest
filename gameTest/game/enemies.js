ENEMY_VISION = 250;

var enemy = new Array();

enemy[0] = {
  sprite: Sprite("enemigo"),
  spriteAlert: Sprite("alert"),
  x: 1350,
  y: 454,
  xs: 220,
  ys: 270,
  width: 64,
  height: 96,
  live: true,
  state: 2,
  speed: 1.2,
  stateCount: 0,
  ladder: -1,
  alertCount: 0,
  spriteCount: 0,
  selectedSprite: 1,
  stopped: false,
  draw: function() {
    updateState(this);
    spriteAnimation(this);
  }
};

enemy[1] = {
  sprite: Sprite("enemigo"),
  spriteAlert: Sprite("alert"),
  x: 1150,
  y: 454,
  xs: 220,
  ys: 270,
  width: 64,
  height: 96,
  live: true,
  state: 1,
  speed: 1.2,
  stateCount: 0,
  ladder: -1,
  alertCount: 0,
  spriteCount: 0,
  selectedSprite: 1,
  stopped: false,
  draw: function() {
    updateState(this);
    spriteAnimation(this);
  }
};

enemy[2] = {
  sprite: Sprite("enemigo"),
  spriteAlert: Sprite("alert"),
  x: 1250,
  y: 454,
  xs: 220,
  ys: 270,
  width: 64,
  height: 96,
  live: true,
  state: 0,
  speed: 1.2,
  stateCount: 0,
  ladder: -1,
  alertCount: 0,
  spriteCount: 0,
  selectedSprite: 1,
  stopped: false,
  draw: function() {
    updateState(this);
    spriteAnimation(this);
  }
};

enemy[3] = {
  sprite: Sprite("enemigo"),
  spriteAlert: Sprite("alert"),
  x: 1250,
  y: 454,
  xs: 220,
  ys: 270,
  width: 64,
  height: 96,
  live: true,
  state: 1,
  speed: 1.2,
  stateCount: 0,
  ladder: -1,
  alertCount: 0,
  spriteCount: 0,
  selectedSprite: 1,
  stopped: false,
  draw: function() {
    updateState(this);
    spriteAnimation(this);
  }
};

enemy[4] = {
  sprite: Sprite("enemigo"),
  spriteAlert: Sprite("alert"),
  x: 2150,
  y: 404,
  xs: 220,
  ys: 270,
  width: 64,
  height: 96,
  live: true,
  state: 1,
  speed: 1.2,
  stateCount: 0,
  ladder: -1,
  alertCount: 0,
  spriteCount: 0,
  selectedSprite: 1,
  stopped: false,
  draw: function() {
    updateState(this);
    spriteAnimation(this);
  }
};

function spriteAnimation(enemy){
  enemy.spriteCount++;
    switch (enemy.state) {
      case 0: //not moving
        if(enemy.spriteCount >= getRandomInt(10,15)){
          enemy.selectedSprite = getRandomInt(1,2);
          enemy.spriteCount = 0;
        }
        enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, enemy.selectedSprite);
        break;
      case 1: //moving left
        if(enemy.spriteCount >= 20)
          enemy.spriteCount = 0;
        if(enemy.spriteCount < 10)
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 5);
        else if(enemy.spriteCount <20)
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 6);
        break;
      case 2: //moving right
        if(enemy.spriteCount >= 20)
          enemy.spriteCount = 0;
        if(enemy.spriteCount < 10)
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 3);
        else if(enemy.spriteCount <20)
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 4);
        break;
      case 3: //ladder up
        if(enemy.spriteCount >= 20)
          enemy.spriteCount = 0;
        if(enemy.spriteCount < 10)
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 11);
        else if(enemy.spriteCount <20)
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 12);
        break;
      case 4: //ladder down
        if(enemy.spriteCount >= 20)
          enemy.spriteCount = 0;
        if(enemy.spriteCount < 10)
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 12);
        else if(enemy.spriteCount <20)
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 11);
        break;
      case 5:
        if(enemy.stopped == false){
          if(enemy.spriteCount >= 20)
            enemy.spriteCount = 0;
          if(enemy.spriteCount < 10)
            enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 5);
          else if(enemy.spriteCount <20)
            enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 6);
        }
        else
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 7);
        enemy.spriteAlert.draw(canvas, enemy.x, enemy.y - 64, 3, 1);
        break;
      case 6:
        if(enemy.stopped == false){
          if(enemy.spriteCount >= 20)
            enemy.spriteCount = 0;
          if(enemy.spriteCount < 10)
            enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 3);
          else if(enemy.spriteCount <20)
            enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 4);
        }
        else
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 8);
        enemy.spriteAlert.draw(canvas, enemy.x, enemy.y - 64, 3, 1);
        break;
      case 7:
        if(enemy.alertCount<20){
          enemy.spriteAlert.draw(canvas, enemy.x, enemy.y - 64, 3, 2);
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 7);
        }
        else{
          enemy.spriteAlert.draw(canvas, enemy.x, enemy.y - 64, 3, 3);
          if(enemy.alertCount < 30 || enemy.alertCount >=38)
            enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 7);
          else if(enemy.alertCount >= 30 && enemy.alertCount < 38){
            enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 9);
            player.live = false;
          }
        }
        break;
      case 8:
        if(enemy.alertCount<20){
          enemy.spriteAlert.draw(canvas, enemy.x, enemy.y - 64, 3, 2);
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 8);
        }
        else{
          enemy.spriteAlert.draw(canvas, enemy.x, enemy.y - 64, 3, 3);
          if(enemy.alertCount < 30 || enemy.alertCount >=38)
            enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 8);
          else if(enemy.alertCount >= 30 && enemy.alertCount < 38){
            enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 10);
            player.live = false;
          }
        }  
        break;
      case 10:
        if(enemy.spriteCount < 15)
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 13);
        else 
          enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 14);
        break;
      default:
        enemy.sprite.draw(canvas, enemy.x, enemy.y, 14, 1);
    }
}

function updateState(enemy){
  if(enemy.state != 10){
    killByJump(enemy);
    killByPunch(enemy);
    killByBox(enemy);
    if(enemy.state != 3 && enemy.state != 4 && enemy.state != 0 && enemy.state != 7 && enemy.state != 8 
      && enemy.state != 5 && enemy.state != 6){
      for (var i = 0; i < ladder.length; i++){
        if(collides(enemy, ladder[i]) &&
          1 == getRandomInt(0,200)){
          enemy.stateCount = 0;
          enemy.spriteCount = 0;
          enemy.ladder = i;
          if(ladder[i].y < enemy.y){
            enemy.state = 3; //ladder Up!
          }
        } 
        else 
        { if (collidesLadder(enemy, ladder[i]) &&
          1 == getRandomInt(0,200)){
            enemy.stateCount = 0;
            enemy.spriteCount = 0;
            enemy.ladder = i;
            enemy.state = 4; //ladder Down!
          }
        }
      }
    }


    if(enemy.state == 0 || enemy.state == 1 || enemy.state == 2){
      enemy.stateCount++;
      if(enemy.stateCount > getRandomInt(80,160)){
        enemy.state = getRandomInt(0,2);
        enemy.stateCount = 0;
        enemy.spriteCount = 0;
      }
      if(enemy.state == 1 || enemy.state == 2)
        enemyWalk(enemy);
    }


    if (enemy.state == 3){
      enemy.y-=3;
      if(enemy.y + enemy.height < ladder[enemy.ladder].y){
        enemy.y = ladder[enemy.ladder].y - enemy.height;
        enemy.state = 0;
        enemy.ladder = -1;
      }
      for (var i = 0; i < box.length; i++){
        if(collides(enemy, box[i])){
          enemy.y = box[i].y + box[i].height;
          enemy.state = 4;
        }
      }
    }

    if (enemy.state == 4){
      enemy.y+=3;
      if(enemy.y + enemy.height > ladder[enemy.ladder].y + ladder[enemy.ladder].height){
        enemy.y = ladder[enemy.ladder].y + ladder[enemy.ladder].height - enemy.height;
        enemy.state = 0;
        enemy.ladder = -1;
      }
      for (var i = 0; i < box.length; i++){
        if(collides(enemy, box[i])){
          enemy.y = box[i].y - enemy.height;
          enemy.state = 3;
        }
      }
    }

    if(enemy.state == 7 || enemy.state == 8){
      look(enemy);
    }

    if(enemy.state != 7 && enemy.state != 8 && noise.play == true){
      if(noise.x < enemy.x && enemy.x - noise.x < ENEMY_VISION){
        enemy.state = 5;
      }
      else if (noise.x > enemy.x && enemy.x + ENEMY_VISION > noise.x){
        enemy.state = 6;
      }
    }

    if(enemy.state == 5 || enemy.state == 6){
      if((keydown.a || keydown.d) && (!keydown.shift && !keydown.ctrl))
        enemy.alertCount=0;
      enemyWalk(enemy);
      enemy.alertCount++;
      if(enemy.alertCount > 120){
        enemy.state = getRandomInt(0,2);
        enemy.alertCount = 0;
      }
    }
  }
}

function killByJump(enemy){
  if(collides(player, enemy) && gravitySpeed>0){
    enemy.state=10;
  }
}

function killByPunch(enemy){
  if(collides(player, enemy) && keydown.e){
    enemy.state=10;
  }
}

function killByBox(enemy){
  for(var i = 0; i < box.length; i++){
    if(collides(box[i], enemy) && box[i].speed > 0){
      enemy.state=10;
      
    }
  }
}

function enemyWalk(enemy){
  enemy.stopped = false;
  look(enemy);
  if(enemy.state == 1 || enemy.state == 5){ //walk left
    enemy.x-=enemy.speed;
    for(var i = 0; i < box.length; i++){
      if(collidesXleft(enemy, box[i])){
        if(enemy.state == 1)
          enemy.state = 2;
        else
          enemy.stopped = true;
        enemy.x = box[i].x + box[i].width;
      }
    }
    for(var i = 0; i < scenario.length; i++){
      if(collidesXleft(enemy, scenario[i])){
        if(enemy.state == 1)
          enemy.state = 2;
        else
          enemy.stopped = true;
        enemy.x = scenario[i].x + scenario[i].width;
      }
    }
    for(var i = 0; i < enemyWall.length; i++){
      if(collidesXleft(enemy, enemyWall[i])){
        if(enemy.state == 1)
          enemy.state = 2;
        else
          enemy.stopped = true;
        enemy.x = enemyWall[i].x + enemyWall[i].width;
      }
    }

  } else if (enemy.state == 2 || enemy.state == 6){ //walk right
    enemy.x+=enemy.speed;
    for(var i = 0; i < box.length; i++){
      if(collidesXright(enemy, box[i])){
        if(enemy.state == 2)
          enemy.state = 1;
        else
          enemy.stopped = true;
        enemy.x = box[i].x - enemy.width;
      }
      
    }
    for(var i = 0; i < scenario.length; i++){
      if(collidesXright(enemy, scenario[i])){
        if(enemy.state == 2)
          enemy.state = 1;
        else
          enemy.stopped = true;
        enemy.x = scenario[i].x - enemy.width;
      }
      
    }
    for(var i = 0; i < enemyWall.length; i++){
      if(collidesXright(enemy, enemyWall[i])){
        if(enemy.state == 2)
          enemy.state = 1;
        else
          enemy.stopped = true;
        enemy.x = enemyWall[i].x - enemy.width;
      }
      
    }
  }
}

function look(enemy){

  if(enemy.x - ENEMY_VISION > player.x && enemy.state == 7){
    enemy.state = 5;
    enemy.stateCount = 0;
    enemy.spriteCount = 0;
    enemy.alertCount = 0;
  }

  if(enemy.x + ENEMY_VISION < player.x && enemy.state == 8){
    enemy.state = 6;
    enemy.stateCount = 0;
    enemy.spriteCount = 0;
    enemy.alertCount = 0;
  }

  if(enemy.state == 7 && player.x > enemy.x)
    enemy.state = 8;
  else if(enemy.state == 8 && player.x < enemy.x)
    enemy.state = 7;

  if(enemy.state == 7  && ((enemy.x - player.x < enemy.y - player.y && enemy.y > player.y) ||
    (enemy.x - player.x < player.y - enemy.y && player.y > enemy.y))){
    enemy.state = 5;
    enemy.stateCount = 0;
    enemy.spriteCount = 0;
    enemy.alertCount = 0;
  }

  if(enemy.state == 8  && ((player.x - enemy.x < enemy.y - player.y && enemy.y > player.y) ||
    (player.x - enemy.x < player.y -   enemy.y && player.y > enemy.y))){
    enemy.state = 6;
    enemy.stateCount = 0;
    enemy.spriteCount = 0;
    enemy.alertCount = 0;
  }

  

  if((enemy.state == 1 || enemy.state == 7 || enemy.state == 5) && player.x < enemy.x && enemy.x - player.x < ENEMY_VISION){ //look left
    if((player.y <= enemy.y && enemy.x - player.x >= enemy.y - (player.y + player.height)) ||
      (player.y > enemy.y && enemy.x - player.x >= player.y - enemy.y)){
      var xs = enemy.x;
      var ys = enemy.y;
      var slope = (enemy.y - player.y)/(enemy.x - (player.x + player.width)); //Look head
      var seen = !hideByBush();
      if(seen){
        for(var i = 0; i < enemy.x - (player.x + player.width); i++){
          xs--;
          ys-=slope;
          for(var j = 0; j < scenario.length; j++){
            if(collidesLook(xs, ys, scenario[j]))
              seen= false;
          }
          for(var j = 0; j < box.length; j++){
            if(collidesLook(xs, ys, box[j]))
              seen= false;
          }
        }
        if(!seen){
          xs = enemy.x;
          ys = enemy.y;
          slope = (enemy.y - (player.y + player.height))/(enemy.x -(player.x + player.width)); //look feet
          seen = true;
          for(var i = 0; i < enemy.x - (player.x + player.width); i++){
            xs--;
            ys-=slope;
            for(var j = 0; j < scenario.length; j++){
              if(collidesLook(xs, ys, scenario[j]))
                seen= false;
            }
            for(var j = 0; j < box.length; j++){
              if(collidesLook(xs, ys, box[j]))
                seen= false;
            }
          }
        }
      }

      if (seen){
        if(enemy.state == 5)
          enemy.alertCount = 0;
        enemy.state = 7;
        enemy.stateCount = 0;
        enemy.spriteCount = 0;
        enemy.alertCount++;
      }
      else {
        if(enemy.state == 7){
          enemy.state = 5;
          enemy.stateCount = 0;
          enemy.spriteCount = 0;
          enemy.alertCount = 0;
        
        }
      }
    } 
  } 
  else if ((enemy.state == 2 || enemy.state == 8 || enemy.state == 6) && player.x > enemy.x && player.x - enemy.x < ENEMY_VISION){ //look right
    if((player.y <= enemy.y && player.x - enemy.x >= enemy.y - (player.y + player.height)) ||
      (player.y > enemy.y && player.x - enemy.x >= player.y - enemy.y)){
      var xs = enemy.x;
      var ys = enemy.y;
      var slope = (enemy.y - player.y)/(player.x - (enemy.x + enemy.width)); //Look head
      var seen = !hideByBush();
      if(seen){
        for(var i = 0; i < (player.x + player.width) - (enemy.x); i++){
          xs++;
          ys-=slope;
          for(var j = 0; j < scenario.length; j++){
            if(collidesLook(xs, ys, scenario[j]))
              seen= false;
          }
          for(var j = 0; j < box.length; j++){
            if(collidesLook(xs, ys, box[j]))
              seen= false;
          }
        }
        if(!seen){
          xs = enemy.x;
          ys = enemy.y;
          slope = (enemy.y - (player.y + player.height))/(player.x - (enemy.x + enemy.width)); //look feet
          seen = true;
          for(var i = 0; i < (player.x + player.width) - (enemy.x); i++){
            xs++;
            ys-=slope;
            for(var j = 0; j < scenario.length; j++){
              if(collidesLook(xs, ys, scenario[j]))
                seen= false;
            }
            for(var j = 0; j < box.length; j++){
              if(collidesLook(xs, ys, box[j]))
                seen= false;
            }
          }
        }
      }
      if (seen){
        if(enemy.state == 6)
          enemy.alertCount = 0;
        enemy.state = 8;
        enemy.stateCount = 0;
        enemy.spriteCount = 0;
        enemy.alertCount++;
      }
      else {
        if(enemy.state == 8){
          enemy.state = 6;
          enemy.stateCount = 0;
          enemy.alertCount = 0;
          enemy.spriteCount = 0;
        }
        
      }
    }
  }

}

function collidesLook(x, y, b) {
  return x < b.x + b.width &&
         x > b.x &&
         y < b.y + b.height &&
         y > b.y;
}

function hideByBush(){
  for(var i = 0; i < bush.length; i++){
    if(player.y >= bush[i].y && player.y + player.height <= bush[i].y + bush[i].height &&
      player.x >= bush[i].x && player.x + player.width <= bush[i].x + bush[i].width)
      return true;
  }
  return false;
}