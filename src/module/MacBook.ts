import BaseLaptop from "./BaseLaptop";

class MacBook<T> extends BaseLaptop<T> {
  constructor(type: T, withNumberic: boolean, withTouchScreeen: boolean) {
    super("MacBook", type, withNumberic, withTouchScreeen);
  }
}

export default MacBook;
