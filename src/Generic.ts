// Generic Function
function myData<T>(data: T): T {
  return data;
}
// console.log(myData("Ilham Maulana").length);
// console.log(myData(123));

// Generic Class
class List<T> {
  private data: T[];
  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T) {
    this.data.push(element);
  }

  addMultiple(...elements: T[]) {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

let number = new List<number>(1, 2, 3, 4);
number.add(5);
number.addMultiple(6, 7, 8, 9);

console.log(number.getAll());
