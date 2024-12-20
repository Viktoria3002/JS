// // // ЗНАЧЕНИЯ ОБЪЕКТОВ

// // const myPlans = { // как добавлять и изменять значения
// //     IT: '4 hours',
// //     ii: 557
// // }
// // myPlans.IT = '5 hours';
// // myPlans.Mistress = '2 hours';
// // myPlans.Sport = '1 hour';
// // console.log(myPlans);

// // delete myPlans.ii; // это оператор удаления 
// // console.log(myPlans);

// // let user = 'vika'; // зачем нужны скобки?
// // myPlans[user] = user; 
// // console.log(myPlans);

// // const myCity = {
// //     cats: 300,
// //     dogs: {
// //         chairs: 100,
// //         tables: 50
// //     }
// // }

// // delete myCity.dogs.tables;
// // console.log(myCity.dogs.chairs);

// // console.log(myCity);

// // // МЕТОДЫ ОБЪЕКТОВ 

// // const City = {
// //     city1: 'New York',
// //     city2: function () {
// //         console.log('Hey, city!')
// //     }
// // }

// // City.city2();

// // const Cit = { //сокращённый метод
// //     city1: 'New York',
// //     city2() {
// //         console.log('Hey city!')
// //     }
// // }

// // Cit.city2()

// // // Перевод из JSON в JS

// // {"userId":1,"id":1} //JSON формат

// // {
// // userId: 1, // JS формат
// // id: 1
// // }

// // JSON.parse()

// // // Перевод из JS в JSON

// // JSON.stringify() // в скобки нужно вписать переменную


// // Как копировать обьект не изменяя значения его свойств?

// const love = {
//     kisses: 10000,
//     hugs: 50000
// }

// const love2 = Object.assign({}, love) // Object.assign
// love2.kisses = 5;
// console.log(love2.kisses);
// console.log(love.kisses);

// // более короткий способ через три точки
// const love2 = { ...love }

// // У этих двух способов минус что значения вложенных свойств сохраняются
// const love = {
//     kisses: 10000,
//     hugs: {
//         cats: 5,
//         dogs: 5
//     }
// }

// есть вариант при котором эта проблема решается

// const love2 = JSON.parse(JSON.stringify(love));

ФУНКЦИИ

// Функция это обьект

// function sum(a, b) { //это параметры
//     const c = a + b
//     console.log(c)
// }
// sum(8, 2) //это аргументы

// console.dir(sum);

// function myFn(a, b) { //после return код не читается - функция заканчивается
//     const d = a + b
//     return d
// }

// myFn(2, 2)

//Функция всегда возвращает значение, если нет return, возвращается undefined

//Самая короткая функция:
// function myFn() {}
// myFn()

// const personOne = {
//     name: 'Bob',
//     age: 21
// }

// function increasePersonAge(person) {
//     const updatedPerson = Object.assign({}, person)
//     updatedPerson.age +=1
//     return updatedPerson
// }

// const updatedPersonOne = increasePersonAge(personOne)
// console.log(personOne.age)
// console.log(updatedPersonOne.age)

// function printMyName() { //CALLBACK
//     console.log('Bogdan')
// }

// setTimeout(printMyName, 1000)

// ОБЛАСТИ ВИДИМОСТИ
// - Глобальная
// - Локальные

// let a
// let b

// function myFn() {
//     let b
//     b = 10
//     a = true вот так неправильно писать, ибо переменная вне функции меняется
//     console.log(a)
// }

// myFn()
// console.log(a)
// console.log(b)

// let a
// let b

// function myFn() {
//     let b
//     b = 10
//     let a //Вместо этого переменную нужно обьявлять в области видимости функции!
//     a  = true
//     console.log(a)
// }

// myFn()
// console.log(a)
// console.log(b)

//Можно использовать строгий режим в глобальной области видимости или в обл видимости функции 
//чтобы он выдавал ошибку о том что вы не обьявили переменную а сразу присвоили ей значение

// 'use strict'


// ОПЕРАТОРЫ

// 1. Арефметические: = - * /
// 2. Сравнения: === !== >= <=
// 3. Логические: ! && ||
// 4. Присваивания: =

// Текстовые операторы:
// typeof
// instanceof
// delete
// new

// Унарные операторы

// У унарных операторов всегда только один операнд(аргумент)
// Нпример:
// а++ Это постфиксная запись ведь операнд стоит ДО оператора
// +а  Это префиксная запись ведь операнд стоит ПОСЛЕ оператора
// delete obj.a
// typeof a
// new Object() Постфиксная запись, ведь () это также оператор

//Бинарные операторы - у них всегда два операнда 
// Например:
// a = b
// a && b
// a === b
// a += 5
// a + b

// также примеры бинарных операторов являются Инфиксной записью, ибо оператор стоит между операндами

// Ложные значения

// Boolean(value) -> false
// Примеры:
// 1. false
// 2. 0
// 3. пустота
// 4. undefined
// 5. null

// Оператор ! всегда выводит либо true либо false
// Например:
// !10 false
// !0 true
// !'abc' false
// !'' true
// !true false
// !undefined true

// Как проверить является ли значение ложным?
// Ставим !!

// !!10 true
// !!0 false
// !!'abc' true
// !!'' false

// && || это операторы короткого замыкания тк ои ищут первое ложное или первое правильное значение

// const button = {
//     width: 100,
//     height: 200
// }

// const newButton = {
//     ...button, сокращенная запись добавления свойтва, оператор
//     color: 'red'
// }
// console.table(newButton) создает таблицу

// const text = {
//     text: 'I will have a wooooork!!!!'
// }

// const colors = {
//     color1: 'red',
//     color2: 'blue',
//     color3: 'white'
// }

// const button = {
//     ...text,
//     ...colors
// }

// console.table(button)

// Шаблонные строки

// const myName = 'Mistress'
// const myCity = 'Moscow'

// const aboutMe = `My name is ${myName} and I am from ${myCity}`

// console.log(aboutMe)

// Присваивание функционального ананимного выражения переменной
// const myFunction = function(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// myFunction(5, 3)

// Функциональное анонимное выражение в вызове другой функции

// setTimeout(function(){
//     console.log('Отложенное сообщение')
// }, 1000)

// Стрелочные функции
// Имени нету всегда
// Ключевого слова function нету
// (a, b) => {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// Как дать имя стрелочной функции?
// Через присваивание переменной.

// const myFunction = (a, b) => {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// myFunction(5, 3)


// Стрелочная функция в вызове другой функции

// setTimeout(() => {
//     console.log('Отложенное сообщение')
// }, 1000)

// СОКРАЩЕНИЯ В СТРЕЛОЧНЫХ ФУНКЦИЯХ

// Если у функции 1 параметр то скобки можно опустить, но лучше не надо из-за худшей читаемости

// a => {
//     Тело функции
// }

// Если тело функции состоит из 1 выражения, фигурные скобки можно опустить
// Функция сама возвращает результат выражения без использования return
// (a, b) => a + b

// Значения параметров функции по умолчанию

 // Число 1 здесь будет равно multiplier в случае если во
// 2 аргументе ничего не вписали при вызове функции
// function multByFactor(value, multiplier = 1) {
//     return value * multiplier
// }

// multByFactor(10, 2) //20
// multByFactor(5) //5

// ПРАКТИКА

// 1) Создать такую же функцию но свою

// function howManyDonates(donates, cola = 2) {
//     return donates * cola
// }
// console.log(howManyDonates(5))
// console.log(howManyDonates(5, 5))

// 2) Переписать функцию используя синтаксис анонимных функциональных выражений

// const myFunction = function(value, multiplier = 1) {
//     return value * multiplier
// }

// console.log(myFunction(10, 2)) //20
// console.log(myFunction(5)) //5

// 3)Переписать функцию используя стрелочную функцию

// const multByFactor = (value, multiplier = 1) => {
//     return value * multiplier
// }

// console.log(multByFactor(10, 2)) //20
// console.log(multByFactor(5)) //5

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt,
// })

// const firstPost = {
//     id: 1,
//     author: 'Bogdan',
// }

// console.table(newPost(firstPost))

// ПРАКТИКА

// 1) Переписать функцию с явным возвратом обьекта

// const newPost = (post, addedAt = Date()) => {
//     return {...post, addedAt}
// }

// const firstPost = {
//     id: 1,
//     author: 'Bogdan',
// }

// console.table(newPost(firstPost))

// ОБРАБОТКА ОШИБОК

// const fnWithError = () => {
//     throw new Error('Some error')
// }

// fnWithError()

// console.log('Continue...')

// Помещаем блок в котором ошибка в блок try catch, чтобы поймать ошибку

// const fnWithError = () => {
//     throw new Error('Some error')
// }

// try {
//     fnWithError()
// } catch (error) {
//     console.error(error) //Можно выбрать либо 1 либо 2 консоль лог
//     console.log(error.message)
// }

// console.log('Continue...')

// ИНСТРУКЦИИ
// Инструкция выполняет определенные действия а выражения выдают определенное значение
// let a; //в инструкциях ставится ; в отличие от выражений
// const b = 5;
// if (a > b) {
//     console.log('a is larger');
// } // но здесь после фигурных скобок ; не ставится
// ; можно опускать после инструкций

// Выражение может быть инструкцией
// 1) Выражение-инструкция
// Если оно стоит одно на строке и если в конце стоит ; то это оно, но последний пункт не обязателен

// 'abc';
// a = a + 3;
// d = 'Good' + 'Evening';
// myFunction(c, d);
// console.log('Hey');
// Инструкция не может быть трансформирована в выражение
// То есть понятия инструкция-выражение не существует

// Как же на самом деле отличить выражение от инструкции?
// Выражения могут быть использованы как аргументы в вызовах функции, а инструкции нет
// function myFn(a) {
//     console.log(a);
// }

// const b = true;
// let c = 10;

// myFn(2 + 3) 5
// myFn(b) true
// myFn(c = c + 1) 11
// myFn(c = c + 1;) Uncaught syntax Error
// myFn(let d) Uncaught syntax Error

// МАССИВЫ
// Есть 2 варианта создания массива, но все использвуют первый

// 1)
// const myArray = [1, 2, 3]
// console.log(myArray)
// 2)
// const myArray2 = new Array(1, 2, 3)
// console.log(myArray2)

// Чтение значений массива
// const myArray = [1, true, 3]
// console.log(myArray[0]) //1
// console.log(myArray[1]) //true

// Можно менять значения массива
// const myArray = [1, 2, 3, 4]
// myArray[2] = 'abc'

// МЕТОДЫ МАССИВОВ

// 1) PUSH
// Добавляет элемент в конце массива
// Пример:
// const myArray = [1, 2, 3, 4]
// myArray.push(5)

// 2) POP
// Удаляет элемент в конце массива
// Пример:
// const myArray = [1, 2, 3, 4]
// myArray.pop()

// Умеет возвращать удаленный элемент
// Пример:
// const myArray = [1, 2, 3, 4]
// const removedElement = myArray.pop() //4 

// 3) UNSHIFT
// Добавляет элемент в начало массива

// const myArray = [1, 2, 3]
// console.log(myArray)
// myArray.unshift(true)
// console.log(myArray)

// 4) SHIFT
// Удаляет первый элемент в массиве
// const myArray = [1, 2, 3]
// console.log(myArray)
// myArray.shift()
// console.log(myArray) //[2, 3]
// const removedElement = myArray.shift()
// console.log(removedElement) // 2
// console.log(myArray) // [3]

// 5) FOREACH 
// Перебирает все элементы массива и выполняет определенные действия с этими элементами которые мы захотим
// В этом примере метод умножает каждый элемент на 2
// Метод не изменяет оригинальный массив
// const myArray = [1, 2, 3]
// myArray.forEach(el => console.log(el * 2))

// 6) MAP 
// Делает то же что и forEach, но только создает новый массив записывая туда результат совершенных действий
// Не меняет оригинальный массив
// const myArray = [1, 2, 3]
// const newArray = myArray.map(el => el * 3)
// console.log(myArray) // [1, 2, 3]
// console.log(newArray) // [3, 6, 9]

// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
// Деструктуризация нужна для того чтобы создать новые переменные и присвоить им те же свойства что и в изначальном обьекте

// const userProfile = {
//     name: 'Bogdan',
//     commentsQty: 23,
//     hasSignedAgreement: false,
// }

// const { name, commentsQty } = userProfile
// const { hasSignedAgreement } = userProfile

// console.log(name)
// console.log(commentsQty)

// ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ
// const fruits = ['Apple', 'Banana']
// const [fruitOne, fruitTwo] = fruits
// console.log(fruitOne) // Apple
// console.log(fruitTwo) // Banana

// ДЕСТРУКТУРИЗАЦИЯ В ФУНКЦИЯХ
// const userProfile = {
//     name: 'Bogdan',
//     commentsQty: 23,
//     hasSignedAgreement: false,
// }

// const userInfo = ({ name, commentsQty }) => {
//     if (!commentsQty) {
//         return `User ${name} has no comments`
//     }

//     return `User ${name} has ${commentsQty} comments`
// }

// userInfo(userProfile)


// УСЛОВНЫЕ ИНСТРУКЦИИ
// 1) if
// 2) if...else
// 3) switch
// 4) тернарный оператор

// ИНСТРУКЦИЯ IF 
// let val  = 10
// if (val > 5) {
//     val += 20
// }
// console.log(val)

// Инструкция IF с оператором отрицания
// const person = {
//     age: 20,
//     name: 'vika',
// }
// if (!person.name) { это оператор отрицания
//     console.log('Имя не указано')
// } else {
//     console.log('Имя указано')
// }

// Инструкция IF ELSE IF 

// const age = 20
// if (age > 18) {
//     console.log('Is adult')
// } else if (age >= 12) {
//     console.log('Is teenager')
// } else {
//     console.log('Is child')
// }

// Предпочтительнее писать так
// const age = 25
// if (age >= 18) {
//     console.log('Is adult')
// }
// if (age >= 12 && age < 18) {
//     console.log('Is teenager')

// } 

// if (age < 12) {
//     console.log('Is child')
// }

// Использование IF в функциях

// const sumPositiveNumbers = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of the arguments is not a number'
//     }

//     if (a <= 0 || b <= 0) {
//         return 'Numbers are not positive'
//     }

//     return a + b
// }

// console.log(sumPositiveNumbers(10, 10))

// SWITCH 

// const month = 2

// switch (month) {
//     case 12:
//         console.log('Декабрь')
//         break
//     case 1:
//         console.log('Январь')
//         break
//     case 2:
//         console.log('Февраль')
//         break
//     default:
//         console.log('Это не зимний месяц')
// }

// ТЕРНАРНЫЙ ОПЕРАТОР

// Условие ? Выражение 1 : Выражение 2

// Советуют разбивать на 3 строки:

// Условие
//     ? Выражение 1
//     : Выражение 2

// const value = 11
// value
//     ? console.log('Условие истинно')
//     : console.log('Условие ложно')

//   const value1 = 11
//   const value2 = 25

//   value1 && value2
//     ? myFunction1(value1, value2)
//     : myFunction2()

// let value = 11
// console.log(value >=0 ? value : -value) // 11

// value = -5
// const res = value >=0 ? value : -value
// console.log(res) // 5

// ЦИКЛЫ
// Все циклы это инструкции

// 1) FOR
 
// for (Начальная итерация; Условие; Итерационное действие) {
//     Блок кода, выполняемый на каждой итерации
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// Циклы можно использовать для массивов, но не рекомендуется!
// Вместо циклов надо использовать функции высшего порядка массивов:
// -forEach 
// -map 
// -reduce 

// const myArray = ['first', 'second', 'third']

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }

// const myArray = ['first', 'second', 'third']

// myArray.forEach((element, index) => {
//     console.log(element, index)
// })

// ЦИКЛ WHILE 

// while (Условие) {
//     // Блок кода, выполняемый на каждой итерации
// }

// let i = 0

// while (i < 5) {
//     console.log(i)
//     i++
// }

// ЦИКЛ DO WHILE 

// Блок инструкции выполняется минимум 1 раз во всех случаях

// do {
//     // Блок кода, выполняемый на каждой итерации
// } while (Условие)


// let i = 0

// do {
//     console.log(i)
//     i++
// } while (i < 5)

// ЦИКЛ FOR IN
// Цикл перебирает все свойства обьекта

// for (key in Object) {
//     // Действия с каждым свойством обьекта
//     // Значения свойства - Object[key]
// }

// FOR IN ДЛЯ ОБЬЕКТОВ
// Чтобы обтратиться к значению свойства нужно использовать []

// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }

// for (const key in myObject) {
//     console.log(key, myObject[key])
// }

// FOREACH ДЛЯ ОБЬЕКТОВ

// Object.keys - метод, который выводит только свойства обьекта в массиве

// Object.keys(myObject).forEach(key => {
//     console.log(key, myObject[key])
// })

// Object.values - метод, который выводит только значения обьекта в массиве
// Object.values(myObject).forEach(value => { 
//     console.log(value)
// })

// FOR IN ДЛЯ МАССИВОВ

// const myArray = [true, 10, 'abc', null]

// for (const key in myArray) {
//     console.log(myArray[key])
// }

// ЦИКЛ FOR OF 

// for (Element of Iterable) {
//     // Действия с определенным элементом
// }

// const myString = 'Hey'

// for (const letter of myString) {
//     console.log(letter)
// }


// const myArray = [true, 10, 'abc', null]
// for (const element of myArray) {
//     console.log(element)
// }
// for of НЕ возможно использовать для обьектов
// Но для массивов всегда нужно использовать forEach

// МОДУЛИ 
//  export ... 
//  import ... 

//  moduleOne.js

//  const myName = () => {
//     console.log('Bogdan')
//  }
//  export default myName


//  moduleTwo.js

//  import printMyName from './moduleOne.js'
//  printMyName()

// НЕСКОЛЬКО ЭКСПОРТОВ
// Если экспортируют несколько переменных то имена переменных в обоих модулях должны совпадать
// //  moduleOne.js

// const one = 1
// const two = 'two'
// export {
//     one,
//     two
// }

// //  moduleTwo.js

// import {
//     one,
//     two
// } from './moduleOne.js'

// console.log(one)
// console.log(two)

// МОЖНО ПЕРЕИМЕНОВАТЬ ПЕРЕМЕННЫЕ В ИМПОРТЕ с помощью AS

// const one = 1
// const two = 'two'
// export { one, two }


// import {
//     one as oneRenamed,
//     two
// } from './moduleOne.js'

// console.log(oneRenamed)
// console.log(two)

// ВСЕ ЧТО ХОЧЕШЬ ЭКСПОРТИРОВАТЬ экспортируй внизу файла
// ВСЕ ЧТО ХОЧЕШЬ импортировать импортируй сверху файла
// если есть внешние пакеты которые нужно импортировать сначала нужно писать их а потом уже свои

// КЛАССЫ И ПРОТОТИПЫ

// 1) Классы позволяют создавать прототипы для обьектов
// 2) На основании прототипов создаются экземпляры
// 3) Экземпляры могут иметь собственные свойства и методы
// 4) Экземпляры наследуют свойства и методы прототипов

// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }
// }