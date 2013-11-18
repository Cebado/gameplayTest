var box = new Array();



box[0] = {
  sprite: Sprite("scenario/box"),
  x: 250,
  y: 160,
  width: 64,
  height: 64,
  speed: 0,
  draw: function() {
    this.sprite.draw(canvas, this.x, this.y);
  }
};


