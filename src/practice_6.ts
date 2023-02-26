// Есть функция которая возвращает Promise, он возвращает массив строк и чисел, опишите правильно тип.

function getPromise(): Promise<(string | number)[]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });;
}

getPromise()
  .then((data) => {
    console.log(data);
  });

//===============================================================================

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

// Есть функция, она принимает два аргумента, в один попадает name и color в другую часть position и weight. Нужно явно указать, что 
// эти поля из AllType.И сама функция возвращает AllType.Воспользуйтесь Pick.

function compare (top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | "weight">): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

const up: Pick<AllType, 'name' | 'color'> = {
  name: "front",
  color: "red"
}

const down: Pick<AllType, 'position' | 'weight'> = {
  position: 10,
  weight: 20,
}

console.log(compare(up, down));

// Укажите дженерики для функции объединения объектов.

function merge<T extends object, U extends object> (objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const a = {
  name: 'Sandwich'
}

const b = {
  age: 'young'
}

const merged = merge(a, b);
console.log(merged);
console.log(merged.name);

// У вас есть следующие классы
// Только добавляя дженерики для классов и интерфейс уберите ошибку.

interface IProps {
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<IProps> {
  pageInfo (): void {
    console.log(this.props.title);
  }
}

