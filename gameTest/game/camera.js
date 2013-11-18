var RIGHT = 500;
var LEFT = 250;
var MID = RIGHT - LEFT;

var dif = 0;



function updateCamera(){
    dif = 0;
    if (player.x >= RIGHT){
        dif = player.x - RIGHT;
        RIGHT = player.x;
        LEFT = RIGHT - MID;
    }
    if (player.x <= LEFT){
        dif = player.x - LEFT;
        LEFT = player.x;
        RIGHT = LEFT + MID;
    }

    horizontalCameraUpdate();
}

function horizontalCameraUpdate(){
    canvas.translate(-dif,0);
    for(var i = 0; i<bglayer.length; i++){
        bglayer[i].x += dif*(1-bglayer[i].displacementMult);
    }

    izq.x +=dif;

    
}