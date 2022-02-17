var mouseX,mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

document.addEventListener('mousedown', () => {
    camera.mouseDown();
})

document.addEventListener('mouseup', () => {
    camera.mouseUp();
})

var zoom = 1;
var zoomX = 0, zoomY = 0;

document.addEventListener('wheel', (e) =>{
    if(e.deltaY < 0 && zoom < 4) {
        zoomX -= canvas.width*zoom*0.5;
        zoomY -= canvas.height*zoom*0.5;
        zoom = zoom*2;
    }
    if(e.deltaY > 0 && zoom > 0.2) {
        zoom = zoom*0.5;
        zoomX += canvas.width*zoom*0.5;
        zoomY += canvas.height*zoom*0.5;
    }
})



function createCursor() {
    sceene.fillStyle = "violet"
    sceene.fillRect(canvas.width*0.5*zoom - 50*zoom + zoomX,canvas.height*0.5*zoom - 50*zoom + zoomY,100*zoom,100*zoom);
}
