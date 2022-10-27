

// 1. Реалізувати клас Employee, в якому будуть наступні властивості - ім'я (name) , вік (age), зарплата (salary).
// Зробіть так, щоб ці властивості заповнювалися при створенні об'єкта.
// Зробіть поле salary приватним та створіть геттери та сеттери для нього
// Зробіть клас Programmer, який буде успадкований від класу Employee, у якому буде властивість langs (список мов)
// Для класса Programmer перезапишите геттер для властивості salary. Хай він повертає властивість salary, помножене на 3.
// Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.

class Employee {
    #salary
    constructor ({name, age, salary}) {
        this.name = name,
        this.age = age,
        this.#salary = salary
    }

    get salary() {
        return this.#salary;
    }

    set salary(newSalary) {
        return this.#salary = newSalary;
    }
}

const user = new Employee({
    name: 'John',
    age: '21',
    salary: 2000
})
// console.log(user)

user.salary = 3000;

// console.log(user.salary)

class Programmer extends Employee{
    constructor({langs, ...employeeProps}) {
        super(employeeProps)
        this.langs = langs
    }

    get salary() {
       
       return super.salary * 3
    }
}

const userProgrammer = new Programmer({
    name: 'Bob',
    age: '30',
    salary: 3500,
    langs: ['JS', 'C#', 'PHP']
})

// console.log(userProgrammer.salary)

//-------------------------


// 2. Створіть класс товару Product, у якому будуть такі властивості:
//     - коротка назва;
//     - повна назва;
//     - опис
//     - ціна;
// (має також бути приватний унікальний артикул для товару);
//
// А також методи:
//     - розрахунок ціни (приватний, аргумент - кількість товарів, якщо більше 20 - тоді знижка на всю суму - 15 відсотків);
//     - отримання інформації про доставку (метод - приватний, аргументи - адреса, ціна за все замовлення. Ціна за доставку обраховується так –  1% від ціни,
//       якщо ціна більше 2000 - доставка безкоштовно);
//     - друк чеку (приватний, цей метод отримує об'єкт замовлення і виводить в консоль)
//     - замовлення товару ( публічний, розраховую ціну товару,доставки та генерує об'єкт замовлення
//       { адреса, товар, кількість, ціна за доставку, ціна за замовлення})
//

//---------------------


class Product {
  #id;

  constructor({shortName, fullName, description, price }) {
    this.shortName = shortName;
    this.fullName = fullName;
    this.description = description;
    this.price = price;
    this.#id = Math.random();
  }

  #calcPrice (amount) {
    if (amount > 20) {
      return this.price * amount * 0.85;
    }
    return this.price * amount;
  }

  #calcDelivery(address, allPrice) {
    if (allPrice <= 2000) {
      return {
        address,
        deliveryPrice: allPrice * 0.01,
      }
    }
    return {
      address,
      deliveryPrice: 0,
    }
  }
  #printCheck(order) {
    console.log('Your order -> ', order);
  }

  makeOrder(amount, address) {
    const sumOrder = this.#calcPrice(amount);
    const delivery = this.#calcDelivery(address, sumOrder);

    const order = {
      delivery,
      product: {...this},
      sumOrder,
    }
    this.#printCheck(order);
    return order;
  }
}


//     - замовлення товару ( публічний, розраховую ціну товару,доставки та генерує об'єкт замовлення
//       { адреса, товар, кількість, ціна за доставку, ціна за замовлення})


const mango = new Product ({shortName: 'man', fullName: 'mango', description: 'big', price: 100});
// const result = mango.makeOrder(10, "Kyiv");
// console.log(mango);

//-------------------------

// 3. Створіть клас Vehicle, у якому буде 4 властивості:
// - currentSpeed ( приватна )
// - maxSpeed ( статична )
// - year,
// - country
// - weight
// - метод info() { порожній }

class Vehicle {
    #currentSpeed;
    static maxSpeed = 300;
    constructor({currentSpeed, year, country, weight}) {
        this.#currentSpeed =currentSpeed;
        this.year = year;
        this.country = country;
        this.weight = weight;
    }
    info() {}

    get currentSpeed(){
        return this.#currentSpeed;
    }
}

class Car extends Vehicle {
    constructor({type, name, model, wheels, ...baseProps}) {
            super(baseProps);
            this.type = type;
            this.name = name;
            this.model = model;
            this.wheels = wheels;
    }
    info() {
        console.log("Car can ride");
    }

    travelTime(distance) {
        return distance / super.currentSpeed;
    }
}

// Створіть додаткові класи
// 1) Car (усі поля від Vehicle + type, name, model, wheels) + методами
// -info (описує поведінку авто),
// -travelTime( обраховує кількість часу яка потрібна для подолання відстані за швидкості currentSpeed,
//        відстань приходить параметром в сам метод )

// 2) AirPlane (усі поля від Vehicle + type, name, engine, private oldEngines) + методи)
// -info (описує поведінку літака),
// -updateEngine ( заміняє поточний двигун літака на той двигун, який прийшов параметром у метод, та додає старий двигун
//                 у приватне поле oldEngines )
// -showAllEngines ( виводить список усіх старих двигунів літака та поточного )

class AirPlane extends Vehicle {
    #oldEngines = [];
    constructor({type, name, engine, ...vehicleProps}) {
        super(vehicleProps);
        this.type = type;
        this.name = name;
        this.engine = engine;
    }

    info() {
        console.log('Plane can fly');
    }

    updateEngine(newEngine) {
        this.#oldEngines.push(this.engine);
        this.engine = newEngine;
    }

    showAllEngines() {
        console.log(`Current engine - ${this.engine}, old engines - ${this.#oldEngines.reverse().join(', ')}`)
    }
}

const somePlane = new AirPlane({
    type: 'Boeing', 
    name: 'Airbus', 
    engine: 'Torpedo 3000', 
    currentSpeed: '800', 
    year: '2016', 
    country: 'Ukraine',
    weight: '20000'
})

// somePlane.updateEngine('Turbo 1004000');
// somePlane.updateEngine('SuperTurbo 100000');
// console.log(somePlane)

// somePlane.showAllEngines();
// somePlane.info();



// 3) Ship (усі поля від Vehicle + type, name, engine, color, passengers: {name, age, ticket} [] ( приватне ) ) + методи)
// -info (описує поведінку корабля),
// -addPassenger ( якщо пасажира ще немає на борту – додати його у список passengers, якщо є вивести помилку )


class Ship extends Vehicle {
    #passangers 
    constructor({type, name, engine, color, passangers, ...vehicleProps}) {
        super(vehicleProps);
        this.type = type;
        this.name = name;
        this.engine = engine;
        this.color = color;
        this.#passangers = passangers;
    }

    info () {
        console.log('Ship can sail')
    }

    addPassenger(passanger) {
        const existingPassanger = this.#passangers.some(el => el.ticket === passanger.ticket)
        if (existingPassanger) {
            console.log('Error! This passanger is on the board')
            return;
        }
        this.#passangers.push(passanger)
    }
}

const Marine = new Ship({
    currentSpeed: 100,
    year: 2021,
    country: "Ukraine",
    weight: 100000,
    type: 'Super Ship',
    name: 'Marine',
    engine: 'Turbo 10101010',
    color: 'black',
    passangers: [{name: 'Ajax', age: 20, ticket: 191991}]
})

// Marine.addPassenger({name: 'JONH', age: 21, ticket: 3})
// console.log('after adding new -> ', Marine)
// Marine.addPassenger({name: 'Ann', age: 18, ticket: 3})
// Marine.info();



// const ford = new Car({
//     currentSpeed: 50, 
//     year: 2018, 
//     country: 'USA', 
//     weight: 2000, 
//     type: "sedan", 
//     name: 'Ford',
//      model: "focus",
//       wheels: 4 })
// ford.info()
// console.log(ford.travelTime(150));



//-------------------------
