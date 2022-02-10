class Camera {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.drag = false;
        this.dragVec = new Vector2(0,0);
    }

    mouseDown() {
        this.drag = true;
        this.dragVec = new Vector2(mouseX,mouseY);
    }

    mouseUp() {
        this.drag = false;
    }

    update() {
        if(this.drag) {
            this.x += this.dragVec.x - mouseX;
            this.y += this.dragVec.y - mouseY;
            this.dragVec = new Vector2(mouseX,mouseY);
        }
    }
}
