import ILaptop from "./ILaptop";
import { a, b } from "./Keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
  name: string;
  type: T;
  withNumberic: boolean;
  withTouchScreeen: boolean;
  constructor(
    name: string,
    type: T,
    withNumberic: boolean,
    withTouchScreeen: boolean
  ) {
    this.name = name;
    this.type = type;
    this.withNumberic = withNumberic;
    this.withTouchScreeen = withTouchScreeen;
  }

  a(): void {
    console.log(a());
  }

  b(): void {
    console.log(b());
  }
}

export default BaseLaptop;
