import StarShip from "./starship.js";
import Saucer from "./saucer.js";
import Shoot from "./shoot.js";

class Game {
    constructor() {
        this.canvas = document.getElementById("stars");
        this.starShip = new StarShip(40, this.canvas.height / 2);
        this.saucerTab = [];
        this.shootTab = [];
        this.score = 0;
        this.display = null;
        this.animation = null;
        this.autoFloat = null;
        this.float = false;
    }


    set Score(_score) {
        this.score = _score;
        this.display.textContent = this.score;
    }

    get Score() {
        return this.score;
    }

    animate() {
        if (this.float) {
            this.float = false;
            window.clearInterval(this.autoFloat);
        }
        else {
          this.float = true;
          this.autoFloat = window.setInterval(() => this.addSaucer(), 750);
        }
    }


    moveAndDraw() {
        let context = this.canvas.getContext("2d");
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.shootTab.length > 0) {
            this.shootTab.forEach((shoot) => {
                shoot.move(this.canvas);
                shoot.draw(context);
                if (shoot.collisionWithSaucer(this.saucerTab) || shoot.x > this.canvas.width) {
                    this.Score += 200;
                    let pos = this.shootTab.indexOf(shoot);
                    this.shootTab.splice(pos, 1);
                }
            });
        }


        if(this.saucerTab.length > 0) {
            this.saucerTab.forEach((saucer) => {
                saucer.move(this.canvas);
                saucer.draw(context);
            });
            let temps = this.saucerTab;
            this.saucerTab = this.saucerTab.filter((saucer) => saucer.x > 0);
            this.Score = this.Score - (temps.length - this.saucerTab.length) * 1000;
        }
        this.starShip.move(this.canvas);
        this.starShip.draw(context);
        this.animation = window.requestAnimationFrame(() => this.moveAndDraw());
    }


    addSaucer() {
        const y = this.alea(this.canvas.height);
        const x = this.canvas.width;
        let saucer = new Saucer(x, y);
        this.saucerTab.push(saucer);
    }

    addShoot() {
        let shoot = new Shoot(this.starShip);
        this.shootTab.push(shoot);
    }

    alea(n) {
        return Math.floor(Math.random(n) * n);
    }


    keyDownActionHandler(event) {
        switch (event.key) {
            case "ArrowUp":
                this.starShip.moveUp();
                break;
            case "ArrowDown":
                this.starShip.moveDown();
                break;
            case " ":
                this.addShoot();
            default: return;
        }
        event.preventDefault();
    }

    keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowUp":
            case "ArrowDown":
                this.starShip.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }
}


const theGame = new Game();
export default theGame;
