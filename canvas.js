var canvas = document.querySelector('canvas');
var cWidth = window.innerWidth*2/3;
var cHeight = window.innerHeight;
var keyMap = {};
canvas.width = cWidth;
canvas.height = cHeight;
var c = canvas.getContext('2d');


class Ship{
    constructor(x,y,width,height,speed,fireRate,skin){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.fireRate = fireRate;
        this.skin = new Image();
        this.skin.src = skin;
    }

    drawShip(){
        c.beginPath();
        c.rect(this.x,this.y,this.width,this.height);
        c.stroke();
    }

    drawShipSvg(){
        c.drawImage(this.skin,this.x,this.y,this.width,this.height);
    }

    movementContoller(){
        if(keyMap[87])this.y -= 2;
        if(keyMap[65])this.x -= 2;
        if(keyMap[83])this.y += 2;
        if(keyMap[68])this.x += 2;
        //test
    }
    
}

function init(){
    window.addEventListener('keydown',function(event){
        keyMap[event.keyCode] = event.type =='keydown';
    });
    window.addEventListener('keyup',function(event){
        keyMap[event.keyCode] = event.type =='keydown';
    })
}

init();

let ship = new Ship(0,0,200,200,0,0,'ship.svg');


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,cWidth,cHeight);
    //Player Logic
    ship.drawShipSvg();
    ship.movementContoller();
}

animate();