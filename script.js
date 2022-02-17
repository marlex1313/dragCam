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
    sceene.fillRect(300*zoom + camera.x + zoomX,400*zoom + camera.y + zoomY,100*zoom,100*zoom)

    sceene.fillStyle = "red"
    sceene.fillRect(600*zoom + camera.x + zoomX,200*zoom + camera.y + zoomY,100*zoom,100*zoom)

    createCursor();
    
    requestAnimationFrame(update)
}
