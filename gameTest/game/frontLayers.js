var ftlayer = new Array();

ftlayer[0] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: -310,
  y: 290,
  width: 320,
  height: 320,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=15)
        this.frameCount=0;
    if(this.frameCount < 9)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 15)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};



ftlayer[1] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: -10,
  y: 480,
  width: 520,
  height: 220,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=19)
        this.frameCount=0;
    if(this.frameCount < 11)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 19)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};


ftlayer[2] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: -10,
  y: 440,
  width: 120,
  height: 80,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=15)
        this.frameCount=0;
    if(this.frameCount < 6)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 15)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};


ftlayer[3] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: 430,
  y: 540,
  width: 1520,
  height: 82,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=16)
        this.frameCount=0;
    if(this.frameCount < 8)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 16)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};


ftlayer[4] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: 490,
  y: 520,
  width: 320,
  height: 80,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=16)
        this.frameCount=0;
    if(this.frameCount < 7)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 16)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};

ftlayer[5] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: 205,
  y: 150,
  width: 130,
  height: 80,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=17)
        this.frameCount=0;
    if(this.frameCount < 8)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 17)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};

ftlayer[6] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: 385,
  y: 150,
  width: 130,
  height: 80,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=20)
        this.frameCount=0;
    if(this.frameCount < 8)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 20)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};

ftlayer[7] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: 190,
  y: 140,
  width: 35,
  height: 90,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=21)
        this.frameCount=0;
    if(this.frameCount < 11)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 21)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};

ftlayer[8] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: 495,
  y: 140,
  width: 35,
  height: 90,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=20)
        this.frameCount=0;
    if(this.frameCount < 10)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 20)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};

ftlayer[9] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: 1140,
  y: 290,
  width: 620,
  height: 50,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=19)
        this.frameCount=0;
    if(this.frameCount < 9)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 19)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};

ftlayer[10] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: 1070,
  y: 170,
  width: 760,
  height: 40,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=17)
        this.frameCount=0;
    if(this.frameCount < 8)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 17)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};

ftlayer[11] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: 1810,
  y: 170,
  width: 60,
  height: 320,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=16)
        this.frameCount=0;
    if(this.frameCount < 10)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 16)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};

ftlayer[12] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: 2028,
  y: 490,
  width: 620,
  height: 120,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=18)
        this.frameCount=0;
    if(this.frameCount < 8)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 18)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};

ftlayer[13] = {
  sprite1: Sprite("scenario/groundSparkles"),
  sprite2: Sprite("scenario/groundSparkles2"),
  x: 1730,
  y: 530,
  width: 30,
  height: 30,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=15)
        this.frameCount=0;
    if(this.frameCount < 6)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 15)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};


/////////// LADDERS ////////////

ftlayer[14] = {
  sprite1: Sprite("ladder/ladderSpark1"),
  sprite2: Sprite("ladder/ladderSpark2"),
  x: 315,
  y: 150,
  width: 90,
  height: 350,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=15)
        this.frameCount=0;
    if(this.frameCount < 7)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 15)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};

ftlayer[15] = {
  sprite1: Sprite("ladder/ladderSpark1"),
  sprite2: Sprite("ladder/ladderSpark2"),
  x: 1070,
  y: 190,
  width: 90,
  height: 170,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=16)
        this.frameCount=0;
    if(this.frameCount < 8)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 16)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};

ftlayer[16] = {
  sprite1: Sprite("ladder/ladderSpark1"),
  sprite2: Sprite("ladder/ladderSpark2"),
  x: 1740,
  y: 190,
  width: 90,
  height: 370,
  frameCount: 0,
  draw: function() {
    if(this.frameCount>=17)
        this.frameCount=0;
    if(this.frameCount < 9)
        this.sprite1.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    else if(this.frameCount < 17)
        this.sprite2.fillSprite(canvas, this.x, this.y, this.width, this.height, "repeat");
    this.frameCount++;
  }
};

