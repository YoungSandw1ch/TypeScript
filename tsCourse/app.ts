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

//================================
let age: number;
age = 50;
let name: string;
name = 'Max';
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback: (a: number) => number;
callback = (a) => { return 100 + a };
//================================
let anything: any;
anything = -20;
anything = 'Text';
anything = {};
//================================
let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}
//================================
let person: [string, number];
person = ['Max', 21];
//================================
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
enum Donwload { LOADING, READY };

const page = {
  load: Donwload.LOADING,
}

if (page.load === Donwload.LOADING) {
  console.log('page loading');
}

if (page.load === Donwload.READY) {
  console.log("Page ready")
}
// Сделайте переменную, которая может принимать или строку или число.
let union: string | number;
union = 10;
union = "10";
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let literal: "enable" | "disable";
literal = "disable";
literal = "enable";
// literal = "edwf"
//================================
function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}
//================================
type PageType = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  }
}

const page1: PageType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2: PageType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}