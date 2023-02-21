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

let age: number;
age = 50;
let namePerson: string;
namePerson = 'Max';
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback: (a: number) => number;
callback = (a) => 100 + a;
//=================================
let anything: any;
anything = "Text";
anything = {};
//=================================
let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") {
  str = some;
}
//=================================
let person: [string, number];
person = ['Max', 21];
//=================================
enum Status { LOADING, READY };

const service = {
  process: Status.LOADING
}

if (service.process === Status.LOADING) console.log("loading");
//=================================
let union: string | number;
union = "10";
union = 10;
// union = [];
//=================================
let literal: 'enable' | 'disable';

literal = 'disable';
literal = 'enable';
// literal = "e2";
//=================================
// Укажите типы для следующих функций
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}
// Создайте свой тип данных на основе имеющихся данных.

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  }
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date,
    updateAt: new Date,
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}