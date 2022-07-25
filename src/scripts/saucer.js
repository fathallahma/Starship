import saucerImg from '../assets/images/flyingSaucer-petit.png';
import Mobile from './mobile';

export default class Saucer extends Mobile{

  //static WIDTH = 48;

  constructor(x,y,deltaX,deltaY) {
      super(x, y, -3, 0, saucerImg);
    }

    move(canvas) {
        if (this.x > 0) {
            this.x += this.deltaX;
        }
        super.move(canvas);
    }}
