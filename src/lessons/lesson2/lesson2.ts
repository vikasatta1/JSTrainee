console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


/*function zam(){
    let count = 0
   return function sum(){
        count++
        console.log(count)
    }
}
let count = zam()
count()
count()
count()
let count2 = zam()
count2()
count2()
count2()
count2()*/















// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:

/* const counter = makeCounter();
console.log(counter()) // 1
console.log(counter()) // 2

 const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter()); // 3*!/*/

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;


// function makeCounter(n: number) {
//     let count = 0
//     //@ts-ignore
//     this.increase = function () {
//         ++count
//     }
//     //@ts-ignore
//     this.decrease = function () {
//         --count
//     }
//     //@ts-ignore
//     this.reset = function () {
//         count = 0
//     }
//     //@ts-ignore
//     this.set = function (num: number) {
//         count = num
//     }
//
// }

/*
//@ts-ignore
let count = new makeCounter(7)
console.log(count.increase())
console.log(count.decrease())
console.log(count.increase())
*/

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
/*
function superSum(n: number) {
    if (n === 0) return 0
    if (n === 1) return (num: number) => num
}
*/

// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
//1
//@ts-ignore

/*function pow(x, y) {
    if (y == 1) return x
    return x * pow(x, y - 1)
}

console.log(pow(2, 6))*/

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
/*const makeFlat = function (arr: any) {
    return arr.reduce(function (a: any, c: any) {
        let v = c instanceof Array ? makeFlat(c) : c;
        return a.concat(v)
    }, [])
}*/

// just a plug
export default () => {
};

/*

const tree = {
    value: 5,
    children: [{
        value: 5,
        children: null
    },
        {
            value: 3,
            children: null
        },
        {
            value:6,
            children: null
        },
        {
            value: 9,
            children: null
        }, {
            value: 1,
            children: null
        },
        {
            value: 6,
            children: [{
                value: 1,
                children: null
            },
                {
                    value: 0,
                    children: null}]}
    ]
}

const treeSum = (tree:any) =>{
let sum = 0
    //@ts-ignore
    if(children){
        //@ts-ignore
        children.forEach(subtree => {
            sum += treeSum(subtree)
        })
    }
    return sum
}*/


/*
function palindrom(str:string){
   let str2 = str.toLowerCase()
    return console.log(str2 == str2.split('').reverse().join(''))
}

palindrom('abba')*/


/*const users = [
    {
        name: 'vika',
        age: 20
    },
    {
        name: 'hanna',
        age: 24
    },

]
console.log(users.sort((u1,u2):any=>u2.age - u1.age))
console.log(users.sort((u1,u2):any=>
    u1.name.localeCompare(u2.name)))*/
//перевернуть массив
/*const arr = [100, 2, 10, 4, 7, 6, 6]
console.log([...arr].map(arr.pop,arr))*/
/*let reversed = []
for(let i = arr.length - 1 ; i>=0;i--){
    reversed.push(arr[i])
}
console.log(reversed)*/
//сортировка
//по возрастанию
/*console.log(arr.sort((a, b) => a - b))
//по убыванию
console.log(arr.sort((a, b) => b - a))*/
//максимальное значение
/* let num =0
for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
        num = arr[i]  }}
console.log(num)*/
/*let max = arr.reduce((acc,el)=>Math.max(acc,el))
console.log(max)*/

/*arr.sort((a,b)=>a-b)
let max = arr[arr.length - 1]
    console.log(max)*/
/*console.log(Math.max(...arr))*/

/*let sum = arr.reduce((a,b)=> a + b,0)
console.log(sum)
let sum2 = 0
for(let i = 0; i < arr.length;i++){
    sum2+=arr[i]
}
console.log(sum2)*/
//фильтрация
const array = [7,'correct', 0 , false , NaN , '',9]
console.log(array.filter((el)=> !!el))
console.log(array.filter((el)=> !!el))