var gravity = true;
var gravitySpeed = 0;
var gravityA = 860;//820
var J_SPEED = 330;//300

var jumpSpeed = 0;

function updatePhysics(){
    var collision = false;

    gravity = true;
    for (var i = 0; i < ladder.length; i++)
            if(collidesY(player, ladder[i])){
                gravity=false;
                gravitySpeed=0;
            }

    if (gravity == true){

        for (var i = 0; i < scenario.length; i++){
            if(collidesY(player, scenario[i])){
                collision=true;
                gravitySpeed=0;
            }
        }
        for (var i = 0; i < box.length; i++){
            if(collidesY(player, box[i])){
                collision=true;
                gravitySpeed=0;
            }
        }

        if(!collision && jumpSpeed <= 0){
            ground = false;
            player.y+=gravitySpeed/30;
            gravitySpeed+=gravityA/30;
            for (var i = 0; i < scenario.length; i++){
                if(collidesY(player, scenario[i])){
                    player.y = scenario[i].y - player.height;
                    gravitySpeed = 0;
                    ground = true;
                }
            }
            for (var i = 0; i < ladder.length; i++){
                if(collidesY(player, ladder[i])){
                    player.y = ladder[i].y - player.height;
                    gravitySpeed = 0;
                    ground = true;
                }
            }
            for (var i = 0; i < box.length; i++){
                if(collidesY(player, box[i])){
                    player.y = box[i].y - player.height;
                    gravitySpeed = 0;
                    ground = true;
                }
            }
        }
    }

    if(jumpSpeed>0){
        player.y -= jumpSpeed/30;
        jumpSpeed -= gravityA/30;
        if(jumpSpeed<=0){
            jumpSpeed=0;
        }
        
        for (var i = 0; i < scenario.length; i++){
            if(collidesYTop(player, scenario[i])){
                player.y = scenario[i].y + scenario[i].height;
                jumpSpeed=0;
            }
        }

        for (var i = 0; i < box.length; i++){
            if(collidesYTop(player, box[i])){
                player.y = box[i].y + box[i].height;
                jumpSpeed=0;

            }
        }
    }

    boxesPhysics();
}

    



function jumpStart(){
    ground = false;
    for (var i = 0; i < scenario.length; i++){
        if(collidesY(player, scenario[i])){
            ground = true;
        }
    }
    for (var i = 0; i < ladder.length; i++){
        if(collidesBot(player, ladder[i])){
            ground = true;
        }
    }

    for (var i = 0; i < box.length; i++){
        if(collidesBot(player, box[i])){
            ground = true;
        }
    }
    if(ground){
        jumpSpeed = J_SPEED;
        jumpStarted = true;
        jumpingFlag = true;
        ground = false;
    }

}

function collides(a, b) {
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y;
}

function collidesLadder(a, b) {
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height + 1 > b.y;
}

function collidesBot(a, b){
    if(a.y + a.height == b.y &&
        a.x < b.x + b.width &&
        a.x + a.width > b.x )
        return  true;
    return false;

}

function collidesXright(a, b) {
    if(a.y >= b.y + b.height)
        return false;
    if(a.x + a.width >= b.x &&
        (b.y < a.y + a.height ||
        b.y + b.height < a.y))
        if(a.x < b.x + b.width)
            return true;

    return false;
}

function collidesXleft(a, b) {
    if(a.y >= b.y + b.height)
        return false;
    if(a.x <= b.x + b.width &&
        (b.y < a.y + a.height ||
        b.y + b.height < a.y))
        if(a.x + a.width > b.x)
            return true;

    return false;
}

function collidesY(a, b) {
    if(a.y >= b.y + b.height)
        return false;
    if(a.y + a.height < b.y)
        return false;
    else{
        
        if(a.x + a.width <= b.x)
            return false;
        if(a.x >= b.x + b.width)
            return false;
    }
    
    return true;
}

function collidesYTop(a, b){
    if(b.y >= a.y + a.height)
        return false;
    if(b.y + b.height < a.y)
        return false;
    else{
        
        if(a.x + a.width <= b.x)
            return false;
        if(a.x >= b.x + b.width)
            return false;
    }
    
    return true;
}

function boxesPhysics(){
    var ydif = 0;
    for (var i = 0; i < box.length; i++){
        ydif = box[i].y;
        box[i].speed+=gravityA/30;
        box[i].y+=box[i].speed/30;
        for (var j = 0; j < scenario.length; j++){
            if(collidesYTop(box[i], scenario[j])){
                box[i].y = scenario[j].y - box[i].height;
                box[i].speed = 0;
            }
        }
        if(ydif != box[i].y){
            for (var j = 0; j < box.length; j++){
                if(collidesYTop(box[i], box[j]) && i != j){
                    box[i].y = box[j].y - box[i].height;
                    box[i].speed = 0;
                }
            }
        }
    }

    // for (var i = 0; i < box.length; i++){

    //     if(player.y + player.height == box[i].y + box[i].height){
    //         if(collidesXright(player, box[i])
    //             && player.x < box[i].x){
    //             box[i].x = player.x + player.width;
    //             for(var j = 0; j < scenario.length; j++){
    //                 if(collidesXright(box[i],scenario[j])){
    //                     box[i].x = scenario[j].x - box[i].width;
    //                     player.x = box[i].x - player.width;
    //                 }
    //             }
    //         }
    //         if(collidesXleft(player, box[i])
    //             && player.x > box[i].x){
    //             box[i].x = player.x - box[i].width;
    //             for(var j = 0; j < scenario.length; j++){
    //                 if(collidesXleft(box[i],scenario[j])){
    //                     box[i].x = scenario[j].x + scenario[j].width;
    //                     player.x = box[i].x + box[i].width;
    //                 }
    //             }
    //         }
    //     } else {
    //         if(collidesY(player, box[i]) &&
    //             player.y < box[i].y){
    //             player.y = box[i].y - player.height;
    //             gravitySpeed = 0;
    //         } else {
    //             if(player.y + player.height > box[i].y + box[i].height &&
    //                 collides(player, box[i])){
    //                 player.y = box[i].y + box[i].height;
    //                 gravitySpeed = 0;
    //                 jumpSpeed = 0;
    //             }
    //         }
    //     }
    // }
}