
var CANVAS_WIDTH = 1024;
var CANVAS_HEIGHT = 600;
var FPS = 30;

// var player = getPlayer();

var container = document.getElementById('container');
var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
          "' height='" + CANVAS_HEIGHT + '" id="canvas' + "'></canvas");
        var canvas = canvasElement.get(0).getContext("2d");
        canvasElement.appendTo(container);


function update() {
    playerControl();
    updatePhysics();
    updateCamera();
}

function draw() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    
    for (var i = 0; i < bglayer.length; i++)
        bglayer[i].draw();

    for (var i = 0; i < scenario.length; i++)
        scenario[i].draw();

    for (var i = 0; i < ladder.length; i++)
        ladder[i].draw();

    for (var i = 0; i < box.length; i++)
        box[i].draw();

    for (var i = 0; i < enemy.length; i++)
        enemy[i].draw();

    player.draw();

    for (var i = 0; i < bush.length; i++)
        bush[i].draw();

    for (var i = 0; i < ftlayer.length; i++)
        ftlayer[i].draw();


  
}


setInterval(function() {
  update();
  draw();
}, 1000/FPS);

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
