
var ladder = new Array();

ladder[0] = {
  sprite: Sprite("ladder/ladder2"),
  x: 345,
  y: 160,
  width: 30,
  height: 330,
  extrawidth: 40,
  draw: function() {
    this.sprite.fillSprite(canvas, this.x-this.extrawidth/2, this.y, this.width+this.extrawidth, this.height, "repeat");
  }
};


ladder[1] = {
  sprite: Sprite("ladder/ladder2"),
  x: 1100,
  y: 200,
  width: 30,
  height: 150,
  extrawidth: 40,
  draw: function() {
    this.sprite.fillSprite(canvas, this.x-this.extrawidth/2, this.y, this.width+this.extrawidth, this.height, "repeat");
  }
};

ladder[2] = {
  sprite: Sprite("ladder/ladder2"),
  x: 1770,
  y: 200,
  width: 30,
  height: 350,
  extrawidth: 40,
  draw: function() {
    this.sprite.fillSprite(canvas, this.x-this.extrawidth/2, this.y, this.width+this.extrawidth, this.height, "repeat");
  }
};



