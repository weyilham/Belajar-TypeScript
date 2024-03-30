import BaseLaptop from "./BaseLaptop";

class Asus<T> extends BaseLaptop<T> {
  constructor(type: T, withNumberic: boolean, withTouchScreeen: boolean) {
    super("Asus", type, withNumberic, withTouchScreeen);
  }
}

export default Asus;
