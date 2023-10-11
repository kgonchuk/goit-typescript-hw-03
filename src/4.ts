class Key {
  private signature: number;
  constructor() {
    this.signature = Math.floor(Math.random() * 10) + 1;
  }
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log(`Person ${person.getKey().getSignature()} walked into house`);
    } else {
      console.log("Door is cloose");
    }
  }
  abstract openDoor(key: Key): void;
}
class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door is open");
    } else {
      console.log("door is cloose");
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
