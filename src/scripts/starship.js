import starShipImg from "../assets/images/vaisseau-ballon-petit.png";
import Mobile from "./mobile.js";
import MoveState from "./moveState.js";

export default class StarShip extends Mobile {
    constructor(x,y) {
        super(x,y,0,8,starShipImg);
        this.moving = MoveState.NONE;
    }

    get up() {
        return this.moving === MoveState.UP;
    }

    get down() {
        return this.moving === MoveState.DOWN;
    }

    moveUp() {
        this.moving = MoveState.UP;
    }

    moveDown() {
        this.moving = MoveState.DOWN;
    }

    stopMoving() {
        this.moving = MoveState.NONE;
    }

    move(canvas) {
        if (this.y + this.deltaY < canvas.height - this.image.height && this.y - this.deltaY > 0) {
            super.move(canvas)
        }
        else if(this.down && this.y + this.deltaY < canvas.height - this.image.height || this.up && this.y + this.deltaY > 0){
            super.move(canvas)
        }
    }
}
