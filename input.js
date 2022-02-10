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
