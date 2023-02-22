// const button = document.querySelector("button")! as HTMLButtonElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// let onButtonClick: () => void;

// onButtonClick = () => {
//   console.log(add(+input1.value, +input2.value));
// } 

// button.addEventListener("click", onButtonClick);

//========================================================

// function createPerson(name: string) {
//   return {
//     name,
//   }
// }

// const person = createPerson('Alex');
// console.log(person);



//=================================repeat

// let age: number;
// age = 50;
// let namePerson: string;
// namePerson = 'Max';
// let toggle: boolean;
// toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
// notInitialize = undefined;
// let callback: (a: number) => number;
// callback = (a) => 100 + a;
// //=================================
// let anything: any;
// anything = "Text";
// anything = {};
// //=================================
// let some: unknown;
// some = "Text";
// let str: string;
// if (typeof some === "string") {
//   str = some;
// }
// //=================================
// let person: [string, number];
// person = ['Max', 21];
// //=================================
// enum Status { LOADING, READY };

// const service = {
//   process: Status.LOADING
// }

// if (service.process === Status.LOADING) console.log("loading");
// //=================================
// let union: string | number;
// union = "10";
// union = 10;
// // union = [];
// //=================================
// let literal: 'enable' | 'disable';

// literal = 'disable';
// literal = 'enable';
// // literal = "e2";
// //=================================
// // Укажите типы для следующих функций
// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error('Error');
// }
// // Создайте свой тип данных на основе имеющихся данных.

// type Page = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   }
// }

// const page1: Page = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: new Date,
//     updateAt: new Date,
//   }
// }

// const page2 = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }

// //==========================
// class House {
//   private tenants: string[] = [];

//   constructor(public readonly type: string, protected street: string) { }
  
//   addTenant(name: string) {
//     this.tenants.push(name);
//   }

//   showTenants(): void {
//     console.log('Tetants: ', this.tenants);
//   }

//   showType(): void {
//     console.log("Type of house: ", this.type);
//   }

//   showStreet(this: House): void {
//     console.log("Steet: ", this.street);
//   }
// }

// class StoneHouse extends House{
//   private generalAtHouse: string;
//   constructor(street: string, general: string) {
//     super('stone', street);
//     this.generalAtHouse = general;
//   }
  
//   showTenants(): void { 
//     console.log("General: ", this.generalAtHouse);

//     super.showTenants();
//   }

//     showStreet(): void {
//     console.log("Steet of stoneHouse: ", this.street);
//   }
// }

// const newStoneHouse = new StoneHouse('Spoon Street', 'Peter');
// newStoneHouse.addTenant('Lois');

// console.log(newStoneHouse);

// const secondStoneHouse = new StoneHouse('Korpans street', 'Max');
// secondStoneHouse.addTenant('Mary');

// console.log(secondStoneHouse);

// secondStoneHouse.showStreet();
// secondStoneHouse.showTenants();
// secondStoneHouse.showType();

//=========================================

abstract class House {
  tenants: Person[] = [];
  door: 'open' | 'close' = 'close';

  constructor(public key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door === 'open') {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House{
  openDoor(key: Key) {
    console.log("this.key: ", this.key);
    console.log("key: ", key);
    if (this.key === key) {
      this.door = 'open';
    } else {
      this.door = 'close';
    }
  }
}

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

const key_1 = new Key();
console.log("key_1: ", key_1);

const person_1 = new Person(key_1);
console.log("person_1: ", person_1)

const house = new MyHouse(key_1);
console.log("House: ", house);

house.openDoor(person_1.getKey());
house.comeIn(person_1);

console.log("House: ", house);

// const key1 = new Key();
// const key2 = new Key();
// const tenant1 = new Person(key1);
// const tenant2 = new Person(key1);
// const house1 = new MyHouse(key1);

// house1.openDoor(key1);
// house1.comeIn(tenant1);

// house1.openDoor(key1);
// house1.comeIn(tenant2);

// console.log(house1);
