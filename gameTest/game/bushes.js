var bush = new Array();

bush[0] = {
  sprite1: Sprite("scenario/bushes/bush1"),
  sprite2: Sprite("scenario/bushes/bush2"),
  x: 2080,
  y: 428,
  width: 96,
  height: 72,
  extrawidth: 40,
  framecount: 0,
  draw: function() {
    if(this.framecount>16)
        this.framecount = 0;
    if(this.framecount<8)
        this.sprite1.draw(canvas, this.x, this.y);
    else
        this.sprite2.draw(canvas, this.x, this.y);
    this.framecount++;
  }
};