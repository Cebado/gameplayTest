var bglayer = new Array();

bglayer[0] = {
  color: "#ECA5E1",
  x: 0,
  y: 0,
  width: 1024,
  height: 600,
  displacementMult: 0,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }
};



bglayer[1] = {
  color: "#0F0",
  x: 600,
  y: 60,
  width: 96,
  height: 96,
  displacementMult: 0,
  frameCount: 0,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }
};

bglayer[1].sprite = Sprite("background/sun");

bglayer[1].draw = function() {
  if(this.frameCount>=6)
    this.frameCount=0;
  if(this.frameCount < 2)
    this.sprite.draw(canvas, this.x, this.y, 3, 1);
  else if(this.frameCount < 4)
    this.sprite.draw(canvas, this.x, this.y, 3, 2);
  else if(this.frameCount < 6)
    this.sprite.draw(canvas, this.x, this.y, 3, 3);
  this.frameCount++;
};


bglayer[2] = {
  sprite: Sprite("background/clouds"),
  x: 0,
  y: 0,
  width: 400,
  height: 300,
  displacementMult: 0.1,
  frameCount: 0,
  draw: function() {
    this.x-=0.3;
    if(this.x > izq.x)
      this.x = this.x - this.width;
    if(this.x < izq.x - this.width)
      this.x = this.x + this.width;

    for(var i=0; i<4; i++){
      var thisx = this.x + this.width*i;
      this.sprite.draw(canvas, thisx, this.y, 1, 1);
    }
  }
};

bglayer[3] = {
  sprite: Sprite("background/clouds2"),
  x: 0,
  y: 0,
  width: 500,
  height: 300,
  displacementMult: 0.2,
  frameCount: 0,
  draw: function() {
    this.x-=0.6;
    if(this.x > izq.x)
      this.x = this.x - this.width;
    if(this.x < izq.x - this.width)
      this.x = this.x + this.width;

    for(var i=0; i<4; i++){
      var thisx = this.x + this.width*i;
      this.sprite.draw(canvas, thisx, this.y, 1, 1);
    }
  }
};

bglayer[4] = {
  sprite: Sprite("background/clouds3"),
  x: 0,
  y: 0,
  width: 600,
  height: 300,
  displacementMult: 0.3,
  frameCount: 0,
  draw: function() {
    this.x-=1;
    if(this.x > izq.x)
      this.x = this.x - this.width;
    if(this.x < izq.x - this.width)
      this.x = this.x + this.width;

    for(var i=0; i<3; i++){
      var thisx = this.x + this.width*i;
      this.sprite.draw(canvas, thisx, this.y, 1, 1);
    }
  }
};



var izq = {
  color: "#0F0",
  x: -1,
  y: 0,
  width: 0,
  height: 0,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }
};