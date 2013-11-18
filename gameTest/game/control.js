function playerControl() {
    var collision = false;
    var jumping = false;

    if (keydown.a && player.live) {
        collision = false;
        for (var i = 0; i < scenario.length; i++){
            if(collidesXleft(player, scenario[i])){
                collision=true;
            }
        }
        if(collision == false){
            if(keydown.shift || keydown.ctrl)
                player.x -= 2;
            else {
                player.x -= 5;
            }
        }

        for (var i = 0; i < scenario.length; i++){
            if(collidesXleft(player, scenario[i])){
                player.x = scenario[i].x + scenario[i].width;
            }
        }
        

        for (var i = 0; i < box.length; i++){
            
            if(collidesXleft(player, box[i]) &&
                (ground == false || keydown.ctrl)){
                player.x = box[i].x + box[i].width;
            } else {
                if(collidesXleft(player, box[i])
                && player.x > box[i].x){
                    box[i].x = player.x - box[i].width;
                    for(var j = 0; j < scenario.length; j++){
                        if(collidesXleft(box[i],scenario[j])){
                            box[i].x = scenario[j].x + scenario[j].width;
                            player.x = box[i].x + box[i].width;
                        }
                    }
                    for(var j = 0; j < box.length; j++){
                        if(collidesXleft(box[i],box[j]) && i != j){
                            box[i].x = box[j].x + box[j].width;
                            player.x = box[i].x + box[i].width;
                        }
                    }
                    for(var j = 0; j < enemy.length; j++){
                        if(collidesXleft(box[i],enemy[j]) && enemy[j].state != 10){
                            box[i].x = enemy[j].x + enemy[j].width;
                            player.x = box[i].x + box[i].width;
                        }
                    }
                }
            }
        }

    }

    if (keydown.d && player.live) {
        collision = false;
        for (var i = 0; i < scenario.length; i++){
            if(collidesXright(player, scenario[i])){
                collision=true;
            }
        }
        if(collision == false){
            if(keydown.shift || keydown.ctrl)
                player.x += 2;
            else
                player.x += 5;
        }

        for (var i = 0; i < scenario.length; i++){
            if(collidesXleft(player, scenario[i])){
                player.x = scenario[i].x - player.width;
            }
        }

        for (var i = 0; i < box.length; i++){
            if(collidesXleft(player, box[i])&&
                (ground == false || keydown.ctrl)){
                player.x = box[i].x - player.width;
            } else {
                if(collidesXright(player, box[i])
                && player.x < box[i].x){
                    box[i].x = player.x + player.width;
                    for(var j = 0; j < scenario.length; j++){
                        if(collidesXright(box[i],scenario[j])){
                            box[i].x = scenario[j].x - box[i].width;
                            player.x = box[i].x - player.width;
                        }
                    }
                    for(var j = 0; j < box.length; j++){
                        if(collidesXright(box[i],box[j]) && i != j){
                            box[i].x = box[j].x - box[i].width;
                            player.x = box[i].x - player.width;
                        }
                    }
                    for(var j = 0; j < enemy.length; j++){
                        if(collidesXright(box[i],enemy[j]) && enemy[j].state != 10){
                            box[i].x = enemy[j].x - box[i].width;
                            player.x = box[i].x - player.width;
                        }
                    }
                }
            }
        }

    }

    if (keydown.w && player.live) {
        var lad;
        for (var i = 0; i < ladder.length; i++){
            if(collides(player, ladder[i])){
                lad = i;
                player.y -= 5;
                for (var j = 0; j < scenario.length; j++){
                    if(collidesYTop(player, scenario[j])){
                        player.y = scenario[j].y + scenario[j].height;
                    }
                }
                for (var j = 0; j < box.length; j++){
                    if(collidesYTop(player, box[j])){
                        player.y = box[j].y + box[j].height;
                    }
                }
                if(!collides(player, ladder[lad])){
                    player.y = ladder[lad].y - player.height;
                    ground = true;
                }

            }
        }
    }

    if (keydown.s && player.live) {
        var lad;
        for (var i = 0; i < ladder.length; i++){
            if(collidesLadder(player, ladder[i])){
                lad = i;
                player.y += 5;
                for (var j = 0; j < scenario.length; j++){
                    if(collidesY(player, scenario[j])){
                        player.y = scenario[j].y - player.height;
                        ground = true;
                    }
                }
                for (var j = 0; j < box.length; j++){
                    if(collidesY(player, box[j])){
                        player.y = box[j].y - player.height;
                        ground = true;
                    }
                }

            }
        }
    }


    if (keydown.space && player.live) {
        if (!jumping){
            jumping = true;
            jumpStart();
        }

    }
}