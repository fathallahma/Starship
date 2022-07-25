import MoveState from "./moveState.js";

export default class Mobile {
    constructor(x, y, deltaX, deltaY, imgSrc) {
        this.x = x;
        this.y = y;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.image = this.createImage(imgSrc);
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y);
    }

    move(box) {
        if (this.moving === MoveState.DOWN) {
            this.y = this.y + this.deltaY;
        }
        if (this.moving === MoveState.UP) {
            this.y = this.y - this.deltaY;
        }
    }

    createImage(srcImage) {
        const image = new Image();
        image.src = srcImage;
        return image;
    }
}
