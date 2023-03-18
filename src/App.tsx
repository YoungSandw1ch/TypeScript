import DataGrid from "./components/DataGrid";

export default function App() {
  const users = [
    { id: 1, name: "John", age: 55 },
    { id: 2, name: "Mitchel", age: 23 },
    { id: 3, name: "Mike", age: 50 },
  ];

    const orders = [
    { id: 1, quantity: 11, amount: 55 },
    { id: 2, quantity: 33, amount: 23 },
    { id: 3, quantity: 45, amount: 50 },
  ];

  return (
    <>
      <DataGrid items={users} />

      <br />
        
      <DataGrid items={orders} />
    </>
  );
}

enum Direction {
  up,
  down,
  left,
  right,
}

console.log(Direction.up);
console.log(Direction[2]);

enum links {
  vk = "https://vk.com/",
  vk1 = "https://vk1.com/",
  vk2 = "https://vk2.com/",
}

console.log(links.vk);

// function greet(name: string, ...skills: string[]) {
//   console.log(`${name} ${skills.join()}`);
// }

// greet('Mike', 'js', "ts", 'REACT');

// const arr: string[] = ["1", '2', '3'];
// console.log(arr.join(","))

// class User {
//   static secret = 12345;

//   constructor(public face: string, public age: (string | number)) { }
  
//   getPass():void {
//     console.log(`${this.face}${User.secret}`)
//   }
// }

// // const user1 = new User('Neo', 23);

// // console.log(user1);
// // user1.getPass();

// class Neo extends User {
//   public face: string = "sersus";
  
//   constructor(age: string) {
//     super(face, age);
//     this.age,
//   }
// }

// const neo = new Neo('de',23);
// neo.getPass();

//===============================================================

interface IColor {
  name: string;
  color: string;
}

function CarPainting(config: IColor) {
  return function (constructor: any) {
    const current = new constructor();
    constructor.prototype.getName = () => {
      console.log(config.name);
    };

    constructor.prototype.fullName = `${current.brand} ${config.color} car`;
  }
}

@CarPainting({name: 'blue', color: 'blue'})
class Auto {
  public brand = "Audi"
}

const car1 = new Auto();
console.log("car1: ", car1, typeof car1);

// console.log(car1.getName())