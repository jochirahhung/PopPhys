var grid = [];
var BLOCKSIZE = 19;
var MAZE_WIDTH = 21;
var MAZE_HEIGHT = 21;
var timer = 0;
for (i = 0; i < MAZE_WIDTH; i++) {
    grid[i] = [];
    for (j = 0; j < MAZE_HEIGHT; j++) {
        if(i % 2 == 1 && j % 2 == 1){
            grid[i][j] = 1;
        }
        else{
            grid[i][j] = 0;
        }
    }
}

var canvas = document.getElementById('gameBoard');
var ctx = canvas.getContext('2d');

function drawSquare(x, y, r, g, b) {
    ctx.fillStyle = "rgb("+r+", "+g+", "+b+")";
    ctx.fillRect(x, y, BLOCKSIZE, BLOCKSIZE);
}

function makeBoard(){
    ctx.clearRect(0, 0, MAZE_HEIGHT, MAZE_WIDTH);
    for(y = 0; y < MAZE_HEIGHT; y++){
        for(x = 0; x < MAZE_WIDTH; x++){
            if(grid[x][y] == 0){
                drawSquare(x*BLOCKSIZE, y*BLOCKSIZE, 0, 0, 0);
            }
            else{
                if(grid[x][y] == 2){
                    drawSquare(x*BLOCKSIZE, y*BLOCKSIZE, 0, 0, 255);
                }
                else if(grid[x][y] == 3){
                    drawSquare(x*BLOCKSIZE, y*BLOCKSIZE, 255, 0, 0);
                }
                else{
                    drawSquare(x*BLOCKSIZE, y*BLOCKSIZE, 255, 25, 255);
                }
                
            }
                
        }
    }
}

var visited = [];
var stacked = [];
var copyStacked = [];
function addToArray(x,y){
  visited.push({x:x, y:y})
  stacked.push({x:x, y:y})
}

function checkMove(x, y){
    if(x > 0 && x < (MAZE_WIDTH)){
        if(y > 0 && y < (MAZE_HEIGHT)){
            for(i = 0; i < visited.length; i++){
                if(visited[i].x == x && visited[i].y == y){
                    return false;
                }
            }
            return true;
        }
    }
}
var StartX = Math.floor(Math.random() * ((MAZE_WIDTH - 1) /2));
    StartX = (StartX *2) + 1;

    var StartY = Math.floor(Math.random() * ((MAZE_HEIGHT - 1)/2));
    StartY = (StartY *2) + 1;
function makeMaze(){
    
    addToArray(StartX, StartY); 
    while(stacked.length > 0){
        var currentNode = stacked[stacked.length - 1];
        var possibleAreas = [];
        if(checkMove((currentNode.x + 2), currentNode.y)){
            possibleAreas.push({x:(currentNode.x + 2), y:currentNode.y})
        }
        if(checkMove((currentNode.x - 2), currentNode.y)){
            possibleAreas.push({x:(currentNode.x - 2), y:currentNode.y})
        }
        if(checkMove(currentNode.x, (currentNode.y - 2))){
            possibleAreas.push({x:currentNode.x, y:(currentNode.y - 2)})
        }
        if(checkMove(currentNode.x, (currentNode.y + 2))){
            possibleAreas.push({x:currentNode.x, y:(currentNode.y + 2)})
        }
        if(possibleAreas.length > 0){
            var random = possibleAreas[Math.floor(Math.random()*possibleAreas.length)];
            addToArray(random.x, random.y);
            breakThatWall(currentNode.x, currentNode.y, random.x, random.y);
            
        }
        else{
            if(copyStacked.length < stacked.length){
                copyStacked = stacked.slice();
            }
            stacked.pop();
        }
        
    }
    var end = copyStacked[copyStacked.length - 1];
    grid[end.x][end.y] = 3;
    grid[StartX][StartY] = 2;
    makeBoard();
    drawSquare(StartX *BLOCKSIZE, StartY*BLOCKSIZE, 0,255,0);
}

function breakThatWall(x, y, randomX, randomY){
    if(x != randomX){
        if(x < randomX){
            grid[randomX - 1][randomY] = 1;
        }
        if(x > randomX){
            grid[randomX + 1][randomY] = 1;
        }
    }
    if(y != randomY){
        if(y < randomY){
            grid[randomX][randomY - 1] = 1;
        }
        if(y > randomY){
            grid[randomX][randomY + 1] = 1;
        }
    }
}
var thisX;
var thisY;
function breakThatWall2(x, y, randomX, randomY){
    thisX = randomX - x;
    thisY = randomY - y;
    if(x != thisX){
        if(x < thisX){
            grid[thisX - 1][thisY] = 2;
        }
        if(x > thisX){
            grid[thisX + 1][thisY] = 2;
        }
    }
    if(y != thisY){
        if(y < thisY){
            grid[thisX][thisY - 1] = 2;
        }
        if(y > thisY){
            grid[thisX][thisY + 1] = 2;
        }
    }
}
makeMaze();
var check = 0;
function AIMaze(){
    if(check < copyStacked.length){
        grid[copyStacked[check].x][copyStacked[check].y] = 2;
        drawSquare(copyStacked[check].x*BLOCKSIZE, copyStacked[check].y*BLOCKSIZE, 0, 0, 255);
        check++;
    }
    else{
        alert("The bot has finished");
        window.open("https://www.youtube.com/watch?v=OfkViWKucCU", "_self");
    }
    
}


function game(){
    setInterval(AIMaze, 100);
}

function handleKeyDown(e){
    if(!e){
        var e = window.event;
    }
    switch(e.keyCode){
        case 37:
        if(grid[StartX - 1][StartY] != 0){
        StartX -= 1;
        drawSquare(StartX *BLOCKSIZE, StartY*BLOCKSIZE, 0,255,0);
        }
        return false;
        case 38:
        if(grid[StartX][StartY - 1] != 0){
        StartY -= 1;
        drawSquare(StartX *BLOCKSIZE, StartY*BLOCKSIZE, 0,255,0);
        }
        return false;
        case 39:
        if(grid[StartX + 1][StartY] != 0){
        StartX += 1;
        drawSquare(StartX *BLOCKSIZE, StartY*BLOCKSIZE, 0,255,0);
        }
        return false;
        case 40:
        if(grid[StartX][StartY + 1] != 0){
        StartY += 1;
        drawSquare(StartX *BLOCKSIZE, StartY*BLOCKSIZE, 0,255,0);
        }
        return false;
    }
}
function checkCounter(){
    if(grid[StartX][StartY] != 3){
        timer++;
        document.getElementById("clock").innerHTML = timer;
    }
    else{
        alert("You won");
        window.open("https://www.youtube.com/watch?v=-tW0G9XWaj0", "_self");
    }
}
setInterval(checkCounter, 1000);
document.onkeydown = handleKeyDown;