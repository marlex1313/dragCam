var c = new Sceene();
var sceene = c.ctx;
var canvas = c.canvas;

var camera = new Camera();

function setup() {
    update();
}

function update() {
    sceene.clearRect(0,0,canvas.width,canvas.height);
    
    camera.update();

    sceene.fillStyle = "blue"
    sceene.fillRect(300 - camera.x,400 - camera.y,100,100)

    requestAnimationFrame(update)
}
