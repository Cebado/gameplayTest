var enemyWall = new Array();

enemyWall[0] = {
    color: "#0F0",
    x: 2020,
    y: 450,
    width: 18,
    height: 10,
    draw: function() {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.width, this.height);
    }
};

enemyWall[1] = {
    color: "#0F0",
    x: 2638,
    y: 450,
    width: 20,
    height: 10,
    draw: function() {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.width, this.height);
    }
};