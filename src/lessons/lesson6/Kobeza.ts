console.log('kobeza')
export const jhon = {
    name: "Jhon",
    age: 23
}
/*interface User{
    name:string
    age:number
}*/

/*

const bob = {
    name: "Bob",
    age: 45
}


*/

// после свойств ; после методов ничего
/*class User {
    name: string | undefined;
    age: number | undefined;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showUserInfo() {
        console.log(`Name: ${this.name}; Age: ${this.age}`)
    }
}

class Manager extends User {
    role;

    constructor(name: string, age: number) {
        super(name, age);
        this.role = 'Manager';
    }

    showUserInfo() {
        console.log('I am manager!')
        super.showUserInfo()//вызываем родительский метод
    }

    deleteUser(id: string) {

    }
}

const Bob = new User("Bob", 23)

console.log(Object.getPrototypeOf(Bob) === User.prototype) //true

function bla(obj: any) {
    if (obj instanceof User) {
        console.log('true instanceOf')
    }
}

bla(Bob)*/

function User(name:string,age:number){
    //@ts-ignore
    this.name = name;
    //@ts-ignore
    this.age = age;
    //@ts-ignore
    return this;
}
/*User.call({}, 'jhon',23)
User.apply({}, ['jhon',23])*/
/*Usesr.prototype*/ // {__proto__:Object.prototype, constructor }







//ООП

//string.capitalize
// Необходимо добавить все строкам в JavaScript метод capitalize, который делает первую букву в строке заглавной
//@ts-ignore
String.prototype.capitalize = function () {
    let str = this
    return str[0].toUpperCase() + str.slice(1)
}

// @ts-ignore
"foo".capitalize() // Foo

//array.filterMap
// Необходимо добавить все массивам в JavaScript метод filterMap, который принимает 2 функции: фильтр и map
// @ts-ignore
Array.prototype.filterMap = function (filter,map){
    let arr = this
}
// [9, 16]
//    [1, 2, 3, 4].filterMap((el) => el > 2, (el) => el ** 2);
//Кастомный toString
// Необходимо сделать конкретному массиву метод toString, который возвращает первый элемент .. последний.

// 1..4
//addToString([1, 2, 3, 4]).toString()

// 1
//addToString([1]).toString()

//
//addToString([]).toString()
//User
// Необходимо создать функцию-конструктор, которая создает пользователя с заданным именем (имя и фамилия) и возрастом.
// А также, необходимо определить функции, sayName (возвращает полное имя) и has18 (true, если есть 18)

//const user = new User('Andrey', 'Kobets', 32);

//user.has18() // true

//user.sayName() // 'Andrey Kobets'
//User #2
// Необходимо создать функцию-конструктор, которая создает пользователя с заданным именем (имя и фамилия) и возрастом.
// А также, необходимо определить функции, sayName (возвращает полное имя) и has18 (true, если есть 18)

/*
const user = new User({
    fname: 'Andrey',
    lname: 'Kobets',
    age: 32
});
*/

//user.has18() // true

//user.sayName() // 'Andrey Kobets'
//Object.create
// Необходимо написать аналог Object.create с использованием __proto__

//objectCreate({a: 1})
//Object.create #2
// Необходимо написать аналог Object.create с использованием Object.setPrototypeOf

//objectCreate({a: 1})
//Object.create #3
// Необходимо написать аналог Object.create с использованием new function

//objectCreate({a: 1})
//Наследование
// Необходимо сделать класс денег у которого входным параметром является количество денег.
// Также создать класс для Доллара, Евро и рубля, которые наследуются от денег.
// В качестве параметра конструктор доллара они смогут также принимать не только число,
// но и экземпляр другого класса дочернего от денег - в таком случае, вторым параметром можно будет передать курс конвертации.
// Курс конвертации можно менять с помощью метода.
// Задание нужно сделать 2-мя способами: с помощью ES6 class и с помощью функций.

//const rub = new Rub(100);

//rub.get(); // 100

//const dollar = new Dollar(rub, 75);

//dollar.get() // 1.3

// Надо сделать так, чтобы метод setMod можно было "чейнить"
//dollar.setMod(80).get() // 1.2
//Класс для хранения данных вида "ключ-значение" в локальном хранилище
// Необходимо написать класс KVStorage, который бы реализовывал базовый CRUD API для работы с локальным хранилищем.
// Первым параметром конструктор класса должен получать "движок" или "стратегию", где именно хранить данные.
// Движки следует хранить как статические свойства класса. Методы класса должны возвращать Promise.
// Следует реализовать 2 движка: localStorage и IndexedDB.

//const storage = new KVStorage(KVStorage.localStorage);

/*storage.set('foo', {bla: 1}).then(async () => {
    console.log(await storage.get('foo'));
});*/
//Использование паттерна "builder" для эффективной записи в локальное хранилище
// С помощью специальных статических методов наполняем внутренний буффер,
// а затем сразу все инициализируем (вызов create)
/*
const storage = KVStorage
    .storage(KVStorage.localStorage)
    .set('foo', {bla: 1})
    .set('bar', {bar: 2})
    .create();*/
/*Класс EventEmitter c поддержкой "всплытия" и "погружения"*/
// Необходимо написать класс EventEmitter с методами on/off/emit,
// который поддерживает механизм погружения и всплытия событий подобно нативному EventTarget.
// Методы должн on возвращать ссылку, которую можно передать в off, для удаляения обработчика.
// Допускается также удалять обработчики по имени события.
/*

const parent = new EventEmitter();
const ev = new EventEmitter(parent);

ev.emit('foo', {bla});

parent.on.capture('foo', (e) => {
    console.log(1);
});

ev.on.capture('foo', (e) => {
    console.log(2);
});

ev.on('foo', (e) => {
    console.log(3);
});

parent.on('foo', (e) => {
    console.log(4);
});



*/





