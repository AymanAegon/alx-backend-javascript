const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  get brand() {
    return this[brandSymbol];
  }

  get motor() {
    return this[motorSymbol];
  }

  get color() {
    return this[colorSymbol];
  }

  cloneCar() {
    return new this.constructor();
  }
}

export default Car;