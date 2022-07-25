import Mobile from "./mobile";
import MoveState from "./moveState.js";
import shootImg from "../assets/images/tir.png";

export default class shoot extends Mobile {
    constructor(starShip) {
        super(starShip.x, starShip.y, 8, 0, shootImg);
    }

    move(canvas){
        if (this.x < canvas.width) {
            this.x += this.deltaX;
        }
        super.move(canvas);
    }

    collisionWith(mobile) {
      if (this.x < mobile.x + mobile.image.width && this.x + this.image.width > mobile.x && this.y < mobile.y + mobile.image.height && this.y + this.image.height > mobile.y){
        return true;
      }
      return false;
      }

    collisionWithSaucer(saucers) {
        let isCollision = null;
        saucers.forEach((saucer) => {
            if (this.collisionWith(saucer)) {
                saucer.deltaX = 0;
                saucer.deltaY = 3;
                saucer.moving = MoveState.DOWN;
                isCollision = saucer;
            }
        });
        return isCollision;
    }
}
