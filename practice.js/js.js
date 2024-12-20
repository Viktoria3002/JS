// function sumNumbers(num) {
//   let num2 = num;
//   while (num2 > 9) {
//     num2 = Math.floor(num2 / 10);
//   }
//   return num2 + (num % 10)
// }
// console.log(sumNumbers(129302));

//Дано число. Выведите количество цифр в этом числе.

// function numberOfDigits(num) {
//   return num.toString().length;
// }
// console.log(numberOfDigits(129302));

//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

// function isNumbersMatch(num1, num2) {
//   let num1Dubl = num1.toString();
//   let num2Dubl = num2.toString();
  
//   if (num1Dubl[0] === num2Dubl[0]) {
//     return 'Совпадают'
//   } else {
//     return 'Не совпадают'
//   }
// }

// console.log(isNumbersMatch(3241, 34232));

//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

// function symbols(str) {
//   if (str.length > 1) {
//     console.log(str[str.length - 2]);
//   } 
// }

// console.log(symbols('Mistres'));

//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

// function division(num1, num2) {
//   if (num1 % num2 === 0) {
//     return 'Без остатка'
//   } else {
//     return num1 % num2;
//   }
// }

// console.log(division(10, 3));

//Выведите в консоль все целые числа от 1 до 100.

// function numbers() {
//   for (let i = 1; i < 101; i++) {
//     console.log(i);
//   }
// }
// console.log(numbers());

//Выведите в консоль все целые числа от -100 до 0.

// function numbers() {
//   for (let i = -100; i < 1; i++) {
//     console.log(i);
//   }
// }

// console.log(numbers());

//Выведите в консоль все целые числа от 100 до 1.

// function numbers() {
//   for (let i = 100; i > 0; i--) {
//     console.log(i)
//   }
// }
// console.log(numbers());

//Выведите в консоль все четные числа из промежутка от 1 до 100.

// function evenNums() {
//   for (let i = 1; i < 101; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// console.log(evenNums());

//Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

// function multiples() {
//   for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }
// console.log(multiples());

//Найдите сумму всех целых чисел от 1 до 100.
// function sumNumbers() {
//   let sum = 0;
//   for (let i = 1; i < 101; i++) {
//     sum = sum + i;
//   }
  
//   // i = 1, sum = 0, sum = 0 + 1, sum = 1
//   // i = 2, sum = 1, sum = 1 + 2, sum = 3
//   // i = 3, sum = 3, sum = 3 + 3, sum = 6
//   // ...
//   // i = 100, sum = 4950, sum = 4950 + 100, sum = 5050
//   // i == 101, ERROR,
  
//   return sum;
// }
// console.log(sumNumbers());

//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

// function sumEvenNumbers() {
//   let sum = 0;
//   for (let i = 1; i < 101; i++) {
//     if(i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumEvenNumbers());

//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
// function symbols(str) {
//   let arr = str.split('');
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
//   }
// }
// console.log(symbols('Привет'));

//Дан массив с числами. Найдите сумму квадратов элементов этого массива.

// function arrWithNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.pow(arr[i], 2);
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(arrWithNumbers([1, 2, 3]))

//Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

// function numbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.sqrt(arr[i]); 
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(numbers([4, 9, 16]));

//Дан массив с числами. Найдите сумму положительных элементов этого массива.

// function numbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(i > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(numbers([-1,3,2]));

//Дано некоторое число:
// 12345
// Получите массив цифр этого числа.

// let num = 12345;
// const arr = []

// while (num > 0) {
//   arr.push(num % 10); // 5, 
//   num = Math.floor(num / 10); // 1234,
// }

// // arr = [] num = 12345

// // arr = []  num = 12345
// // arr = [5] num = 1234
// // arr = [4]  num = 123 
// // arr =[3]  num = 12
// // arr = [2] num = 1

// // return 

// console.log(arr.reverse());






// 12.04.2024

//Дано некоторое число:
// 12345
// Получите массив цифр этого числа.

// let num = 12345;
// const arr = []

// while (num > 0) {
//   arr.push(num % 10); // 5,
//   num = Math.floor(num / 10); // 1234,
// }

// // arr = [] num = 12345

// // arr = []  num = 12345
// // arr = [5] num = 1234
// // arr = [4]  num = 123
// // arr =[3]  num = 12
// // arr = [2] num = 1

// // return

// console.log(arr.reverse());

// Дано некоторое число:
// 12345
// Переверните его:
// 54321

// let num = 12345;
// const arr = [];

// while (num > 0) {
//   arr.push(num % 10);
//   num = Math.floor(num / 10);
// }
// console.log(arr);

// Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.

// let num = 12345;
// let sum = 0;
// for (let i = 0; i < num.toString().length; i++) {
// sum += parseInt(num.toString()[i]);
// }
// console.log(sum);

// 13.04
//Заполните массив целыми числами от 1 до 10.

// let arr = [];
// for (let i = 1; i < 11; i++) {
//   arr.push(i);
// }

// console.log(arr);

//Заполните массив четными числами из промежутка от 1 до 100.

// let arr = [];
// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

//Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.
// function toFixed(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     arr[i] = parseFloat(arr[i].toFixed(1));
//   }
//   return arr;
// }
// console.log(toFixed([1.456, 2.125, 3.32, 4.1, 5.34]));

//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://
// function startingValue(arr) {
//   return arr.filter(str => str.startsWith("http://"))
// }
// console.log(startingValue(['http://', 'lllll', 'jbhjl']));

//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html

// function endsWith(arr) {
//   return arr.filter(str => str.endsWith('.html'));
// }
// console.log(endsWith(['www.html', 'hpts.htm', 'rrirf.kkkgl']));

//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

// function numMore(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + (arr[i] * 0.1);
//   }
//   return arr;
// }
// console.log(numMore([1, 2, 3, 4, 1111]));

//Заполните массив случайными числами из промежутка от 1 до 100.

// function randomArray(length) {
//     let arr = [];
//     for(let i = 0; i < length; i++) {
//       arr.push(Math.floor(Math.random() * 100) + 1);
//     }
//     return arr;
//   }
//   console.log(randomArray(10));
  
  // Дано некоторое число:
  // 12345
  // Выведите в консоль все его символы с конца.
  
  // function reverseNumber(num) {
  //   return num.toString().split('').reverse().join('');
  // }
  // console.log(reverseNumber(534))

  // Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

// function subArrays(arr) {
//     for(let i = 0; i < arr.length - 1; i += 2) {
//       console.log(arr[i], arr[i] + 1)
//     }
//     return arr;
//   }
//   console.log(subArrays([1, 2, 3, 4, 5, 6]));

// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]

// function sumArrays(arr1, arr2) {
//   return [...arr1, ...arr2];
// }
// console.log(sumArrays([1, 2, 3], [4, 5, 6]))


//Дана некоторая строка. Найдите позицию первого нуля в строке.

// function numberPosition(str) {
//   for(let i = 0; i < str.length; i++) {
//     if(str[i] === '0') {
//       console.log(i)
//     }
//   }
//   return str;
// }
// numberPosition('1, 2, 3, 0, 5');

// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
// function sumNumbers() {
//     for(let i = 10; i < 1001; i++) {
      
//       let num = i;
      
//       while(num > 99) {
//         num = Math.floor(num / 10);
//       }
      
//       if (Math.floor(num / 10) + Math.floor(num % 10) === 5) {
//         console.log(i);
//       }
//     }
//   }
//   console.log(sumNumbers());

//Дан массив. Удалите из него элементы с заданным значением.


// function deleteEl(arr, num) { // создаем функцию с двумя параметрами: массив и число
//     let array = []; // создаем массив чтобы положить туда все нужные элементы из старого массива
//     for(let i = 0; i < arr.length; i++) { // создаем цикл чтобы пройтись по массиву и найти все числа кроме num
//       if(arr[i] !== num) { // создаем условуную конструкцию чтобы проверить равен ли какой-то из элементов массива num и если НЕ равен, то
//         array.push(arr[i]); // то заливаем в новый массив все числа которые подходят под условие
//       }
//     }
//     return array; // возвращаем новый массив без элемента который совпал
//   }
//   console.log(deleteEl([1, 2, 3], 2)) // вызываем функцию

// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

// function sumNumbers(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length / 2; i++) {
//     sum += (arr[i]);
//   }
//   return sum;
// }
// console.log(sumNumbers([1, 2, 3, 4, 5, 6]));

//Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

// function negativeNum(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < 0) {
//       sum += 1;
//     }
//   }
//   return sum;
// }
// console.log(negativeNum([1, 2, -3, -4, -5, -6]));

//Дан массив с числами. Оставьте в нем только положительные числа.

// function positiveNum(arr) {
//   let arr2 = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }
// console.log(positiveNum([1, 2, 3, 4, -3, -4, -5, -6]))


//Дана строка. Удалите предпоследний символ из этой строки.

// function deleteSymbol(str) {
//   let string = ''; // создается строка чтобы туда положить нужные элементы старой строки
//   for(let i = 0; i < str.length; i++) { //проходим по каждому элементу строки
//     if(i !== str.length - 2) { // если предпоследний элемент строки не равен 
//       string += str[i] // к строке прибавляются элементы
//     }
//   }
//   return string;
// }
// console.log(deleteSymbol('Привет'));

//Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

// function divisionArr(arr) {
//   let firstSum = 0;
//   let secondSum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     if(i < arr.length / 2) {
//       firstSum += arr[i];
//     }
//     if(i >= arr.length / 2) {
//       secondSum += arr[i];
//     }
//   }
//   return (firstSum / secondSum);
// }
// console.log(divisionArr([1, 2, 3, 1, 2, 3]));

// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

// function wordMatch(word1, word2) {
//   if(word1[word1.length - 1].toLowerCase() === word2[0].toLowerCase()) {
//     console.log('Совпадает');
//   } else {
//     console.log('Не совпадает');
//   }
// }
// wordMatch('Привеп', 'Пока');

//Дана некоторая строка. Найдите позицию третьего нуля в строке.

// function findPosition(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '0') {
//       count += 1;
//     }
//     if (count === 3) {
//       return i;
//     }
//   }
// }

// console.log(findPosition('120301030'));

// Даны числа, разделенные запятыми:
// '12,34,56'
// Найдите сумму этих чисел.

// function sumNumbers(str) {
//   let sum = 0;
//   let arr = str.split(',');
//   for(let i = 0; i < arr.length; i++) {
//     sum += parseInt(arr[i]);
//   }
//   return sum;
// }
// console.log(sumNumbers('12,34,56'));


//Дана дата в следующем формате:
// '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

// function formatDate(str) {
//     const arr = str.split('-');
    
//     const dateObject = {
//       year: arr[0],
//       month: arr[1],
//       day: arr[2]
//     }
//     return dateObject;
//   }
//   console.log(formatDate('2025-12-31'));

// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

// function firstNum(str) {
//   for(let i = 0; i < str.length; i++) {
//     if(0 <= parseInt(str[i]) && parseInt(str[i]) <= 9) {
//       return i;
//     }
//   }
// }
// console.log(firstNum('j3d4g'));

// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

// function objEdit(obj) {
//     let keysArray = [];
//     let valuesArray = [];
//     for (const key in obj) {
//       keysArray.push(key);
//       valuesArray.push(obj[key]);
//     }
//     return [keysArray, valuesArray];
//   }
//   console.log(objEdit(
//     {
//       year: '2025',
//       month: '12',
//       day: '31'
//     }));


//Дано число. Выведите в консоль количество четных цифр в этом числе

// function countNumbers(num) {
//   let arr = num.toString().split('');
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(countNumbers(12344));


// Дана некоторая строка:
// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'

// function upperCase(str) {
//     let arr = str.split(''); // превращает строку в массив
//     for(let i = 0; i < arr.length; i++) { // просматривает каждый элемент массива
//       if(i % 2 === 0) { // если остаток от индекса равен нулю 
//         arr[i] = arr[i].toUpperCase(); // то элемент становится заглавным
//       }
//     }
//     return arr.join(""); // возвращаем массив, делаем из массива строку
//   }
//   console.log(upperCase('abcde'));
  //abcde
  // 1. [a, b, c, d, e]
  // 2. 0 % 2 === 0 true - A
  // 3. 1 % 2 === 0 false // = 0.5 - b
  // 4. 2 % 2 === 0 true - C
  // 5. 3 % 2 === 0 false // = 1.5 - d 
  //6. 4 % 2 === 0 true - E
  // [A, b, C, d, E] --> 'AbCdE'

  // Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'

// function upperCaseSymbols(str) {
//   let words = str.split(' ');
//   let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//   return capitalizedWords.join(' ');
// }
// console.log(upperCaseSymbols('aaa bbb ccc'));

// Дана некоторая строка, например, вот такая:
// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

// function arrPosition(str) {
//   let arr = str.split('');
//   let position = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === '0') {
//       position.push(i);
//     }
//   }
//   return position;
// }
// console.log(arrPosition('023m0df0dfg0'));

// Дана некоторая строка:
// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'

// function deleteSymbol(str) {
//   let arr = str.split('');
//   for (let i = 2; i < arr.length; i += 2) {
//     arr.splice(i, 1);
//   }
//   return arr.join('');
// }
// console.log(deleteSymbol('abcdefg'));


// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

// function divisionEl(arr) {
//   let evenSum = 0;
//   let oddSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       evenSum += arr[i];
//     } else {
//       oddSum += arr[i];
//     }
//   }
//   let result = evenSum / oddSum;
//   return result;
// }
// console.log(divisionEl([1, 2, 3, 4, 5, 6]));

//Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

// function getIndexNums(str) {
//   let indexNums = [];
//   for (let i = 0; i < str.length; i++) {
//     if ('123456789'.includes(str[i])) {
//       indexNums.push(i);
//     }
//   }
//   return indexNums;
// }
// console.log(getIndexNums('a1b2c3'));


// Дан массив с некоторыми числами, например, вот такой:
// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]

// function getReversedArr(arr) {
//   let reversedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = parseInt(arr[i].toString().split('').reverse().join(''));
//     reversedArr.push(arr[i]);
//   }
//   return reversedArr;
// }
// console.log(getReversedArr([123, 456, 789]));

//Дана некоторая строка:
// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
// 'aBcDe'

// function changeRegistrLetters(str) {
//   let changedLetters = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       changedLetters.push(str[i].toLowerCase());
//     } else {
//       changedLetters.push(str[i].toUpperCase());
//     }
//   }
//   return changedLetters.join('');
// }
// console.log(changeRegistrLetters('AbCdE'));

// function changeRegistrLetters(str) {
//   let changedLetters = [];
//   str.split('').forEach(el => {
//     if (el === el.toUpperCase()) {
//       changedLetters.push(el.toLowerCase());
//     } else {
//       changedLetters.push(el.toUpperCase());
//     }
//   })
//   return changedLetters.join('');
// }
// console.log(changeRegistrLetters('AbCdE')); 
  
//Дан некоторый массив с числами, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:
// [12, 34, 56]

// function sumElements(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     result.push(parseInt(arr[i].toString() + arr[i + 1].toString())); 
//   }
//   return result;
// }
// console.log(sumElements([1, 2, 3, 4, 5, 6]));

//Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:
// 'aaa Bbb ccc Eee fff'

// function changeRegister(str) {
//   let arr = str.split(' ');
//   for (let i = 1; i < arr.length; i += 2) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
//   return arr;
// }
// console.log(changeRegister('aaa bbb ccc eee fff'));

// Дана некоторая строка:
// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
// 'A BC DEF ghij'

// function changeRegister(str) {
//   let arr = str.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length <= 3) {
//       arr[i] = arr[i].toUpperCase();
//     }
//   }
//   return arr;
// }
// console.log(changeRegister('a bc def ghij'));


//Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

// function getRegister(str) {
//   if (str === str.toUpperCase()) {
//     console.log('Верхний регистр')
//   } else {
//     console.log('Нижний регистр')
//   }
//   return str;
// }
// getRegister('A');


//Дано некоторое число, например, такое:
// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
// 28

// function deleteNums(num) {
//   let arr = num.toString().split('');
//   let evenNums = '';
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNums += (arr[i]);
//     }
//   }
//   return parseInt(evenNums);
// }
// console.log(deleteNums(123789));

// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

// function checkRegister(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       count++;
//     }
//   }
//     if (count > 2) {
//       console.log('Более двух загланых букв')
//     } else {
//       console.log('Менее двух заглавных букв')
//     }
// }
// checkRegister('SbSdS');

// function deleteSubstring(str) {
//   let result = '';
//   str.split(' ').forEach(el => {
//     if (el.length <= 3) {
//       result += el + ' ';
//     }
//   })
//   return result;
// }
// console.log(deleteSubstring('1 22 333 4444 22 5555 1'));

// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:
// [1, 2, 'a', 'b', 'c', 3]

// function sumArrays(arr1, arr2) {
//   let sumArr = [];
//   arr1.forEach(el => {
//     sumArr = arr1.slice(0, arr1.length - 1);
//   })
//   arr2.forEach(el => {
//     sumArr.push(el);
//   })
//   sumArr.push(arr1[arr1.length - 1]);
//   return sumArr;
// }
// console.log(sumArrays([1, 2, 3], ['a', 'b', 'c']));


// Дано некоторое число:
// 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
// 12 + 34 + 56

// function sumPairsOfNums(num) {
//   let sum = 0;
//   num.toString().split('').forEach((el, i) => {
//     if (i % 2 !== 0) {
//       sum += parseInt(num.toString()[i - 1] + el);
//     }
//   })
//   return sum;
// }
// console.log(sumPairsOfNums(123456));

//Дан массив с числами:
// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

// function getReversedArr(arr) {
//   console.log(arr.reverse());
// }
// getReversedArr([1, 2, 3, 4, 5]);

// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

// function countLetters(str) {
//   let result = '';
//   let count = 0;
//   str.split('').forEach(el => {
//     if (isNaN(parseInt(el))) {
//       count++;
//     }
    
//     if (count > 3) {
//       result = 'Более трех букв';
//     } else {
//       result = 'Менее трех букв';
//     }
//   })
//   return result;
// }
// console.log(countLetters('a1b2c3b'));

// Дано число. Получите первую четную цифру с конца этого числа.

// function getFirtEvenNum(num) {
//   let nums = [];
//   let evenNum = '';
//   num.toString().split('').reverse().forEach(el => {
//     if (el % 2 === 0) {
//       nums += el;
//     }
//     evenNum = nums[0];
//   })
//   return evenNum;
// }
// console.log(getFirtEvenNum(123456789));


// Дана некоторая строка:
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'

// function changeIndex(str) {
//   let arr = str.split(' ');
//   let modifiedWords = '';
//     modifiedWords = arr.map((word) => {
//       return '!' + word.slice(1);
//     })
//   let result = modifiedWords.join(' ');
//   return result;
// }
// console.log(changeIndex('abcde abcde abcde'));

//Дан массив с числами:
// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

// function findsimilarElements(arr) {
//   let count = 0;
//   arr.forEach((el,i) => {
//     if (el === arr[i + 1]) {
//       count++;
//     }
//     if (count === 1) {
//       console.log('Есть два одинаковых элемента подряд');
//     } 
//   })
// }
// findsimilarElements([1, 2, 3, 3, 4, 5]); Чтото страннное -_-

// function findsimilarElements(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       count++;
//     }
//     if (count === 1) {
//       console.log('Есть два одинаковых элемента подряд'); 
//       break;
//     }
//   }
//   if (count !== 1) {
//     console.log('Нет двух одинаковых элементов подряд');
//   }
// }
// findsimilarElements([1, 2, 3, 4, 5]);

//Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

// function checkNumbers(num) {
//   let count = -1;
//   let arr = num.toString().split('');
//   arr.forEach((el, i) => {
//     if (arr[i] < arr[i + 1]) {
//       count++
//     }
    
//     if (count > arr.length - 1) {
//       console.log('Числа расположены по возрастанию')
//     }
//   })
    
//   if (count < arr.length - 1) {
//     console.log('Числа НЕ расположены по возрастанию')
//   }
  
// }
// checkNumbers(12345); //снова что-то не так -_-

// function checkNumbers(num) {
//   let count = 0;
//   let arr = num.toString().split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       count++;
//     }
//   }
    
//   if (count === arr.length - 1) {
//     console.log('Числа расположены по возрастанию')
//   } else {
//     console.log('Числа НЕ расположены по возрастанию')
//   }
// }
// checkNumbers(12345);

// Дан массив:
// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.

// function deleteEmptyString(arr) {
//   const result = [];
//   arr.forEach(el => {
//     if (el !== '') {
//       result.push(el);
//     }
//   })
//   return result;
// }
// console.log(deleteEmptyString([1, '', 2, 3, '', 5]));

//Дан массив:
// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.

// function sortElements(arrs) {
//   const sortedArrays = [];
//   arrs.forEach(arr => {
//     sortedArrays.push(arr.sort());
//   })
//   return sortedArrays;
// }
// console.log(sortElements([[3, 5, 2, 4, 1], [2, 1, 4, 3, 5], [4, 3, 1, 5, 2],]));

// function sortElements(arrs) {
//   return arrs.map(value => value.sort((a, b) => a - b));
// }
// console.log(sortElements([[3, 5, 4, 6, 9, 1111], [2, 1, 4, 3, 5], [4, 3, 1, 5, 2],]));

// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

// function getSimilarArraysLength(arr1, arr2) {
//   let difference = arr2.length - arr1.length;
//   for (let i = 0; i < difference; i++) {
//     arr2.pop()
//   }
//   return arr2;
// }
// console.log(getSimilarArraysLength([1, 2, 3], [1, 2, 3, 4, 5]));

//Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

// function getPenultimateDigitEven() {
//   for (let i = 10; i < 1001; i++) {
//   if (Math.floor(i % 100 / 10) % 2 === 0) {
//     console.log(i);
//   }
//   }
// }
// getPenultimateDigitEven();



//Дан массив. Удалите из него каждый пятый элемент.

// function deleteElementsOfArray(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if ((i + 1) % 5 === 0) {
//             arr.splice(i, 1);
//         }
//     }
//     return arr;
// }
// console.log(deleteElementsOfArray([1, 2, 3, 5, 6, 7, 8, 9, 10, 11]));

// Дана некоторая переменная с числом:
// let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
// '00000'

// function makeZeroString(num) {
//   let result = "";
//   for (let i = 0; i < num; i++) {
//     result += "0";
//   }
//   return result;
// }
// console.log(makeZeroString(10));

//Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
// 'aaa ccc fff'
 
// function deleteEvenNumber(str) {
//   let result = [];
//   str.split(' ').forEach((el, i) => {
//     if (i % 2 === 0) {
//       result.push(el);
//     }
//   })
//   return result.join(" ");
// }
// console.log(deleteEvenNumber('aaa bbb ccc eee fff'));

// function deleteEvenNumber(str) {
//   let result = [];
//   let arr = str.split(' ');
//   for (let i = 0; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }
//   return result.join(" ");
// }
// console.log(deleteEvenNumber('aaa bbb ccc eee fff'));

// Дан массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

// function sumElementsOfArray(arr) {
//   let sum = 0;
//   arr.forEach((el, i) => {
//     el.forEach(num => {
//       sum += num;
//     })
//   })
//   return sum;
// }
// console.log(sumElementsOfArray([[1, 2, 3], [4, 5, 6], [7, 8, 9],]));

//Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

// function deleteWords(arr) {
  // Создаем переменную result в которой будут слова состоящие менее чем из трех символов.
  // через for проходимся по массиву строк 
  // если строка имеет меньше 3 символов пушим ее в result
  // возвращаем result
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < 3) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(deleteWords(['На', 'колени', 'Ирcи']));

// Дано некоторое число:
// 1357
// Проверьте, что все цифры этого числа являются нечетными.

// function checkOddNumbers(num) {
//   let oddNums = 0;
//   let arr = num.toString().split('');
//   arr.forEach(el => {
//     if (el % 2 !== 0) {
//       oddNums += 1;
//     }
//   })
//     if (oddNums === arr.length) {
//       console.log('Все цифры этого числа являются нечетными')
//     } else {
//       console.log('Не все цифры этого числа являются нечетными')
//     }
// }
// checkOddNumbers(13578);


//Дано некоторое слово:
// 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.

// function isPalindrome(word) {
//   const length = word.length;
//   for (let i = 0; i < length / 2; i++) {
//     if (word[i] !== word[length - 1 - i]) {
//         return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome('abcba'));
// abcba 

// i = 0 word[0] = a !== word[5 - 1 - 0] = a;
// i = 1 word[1] = b !== word[5 - 1 - 1] = b;

// function sumElementsOfArray(arrs) {
  //   let sum = 0;
  //   arrs.forEach((el, i) => {
  //     el.forEach((el, i) => {
  //       el.forEach((num, i) => {
  //         sum += num;
  //       })
  //     })
  //   })
  //   return sum;
  // }
  // console.log(sumElementsOfArray([
  // 	[
  // 		[1, 1, 1],
  // 		[1, 1, 1],
  // 		[1, 1, 1],
  // 	],
  // 	[
  // 		[1, 1, 1],
  // 		[1, 1, 1],
  // 		[1, 1, 1],
  // 	],
  // 	[
  // 		[1, 1, 1],
  // 		[1, 1, 1],
  // 		[1, 1, 1],
  // 	],
  // ]))

  //Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

// function getEvenNums() {
//   let result = [];
//   for (let i = 10; i < 1001; i++) {
//     let firstDigit = parseInt(i.toString()[0]);
//     if (firstDigit % 2 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(getEvenNums());

// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива:
// [2, 1, 4, 3, 6, 5]

// function reversePairOfNums(arr) {
//   let reversedArray = [];
//   for (let i = 0; i < arr.length - 1; i += 2) {
//     reversedArray.push(arr[i + 1]);
//     reversedArray.push(arr[i]);
//   }
//   if (arr.length % 2 !== 0) {
//     reversedArray.push(arr[arr.length - 1])
//   }
//   return reversedArray;
// }
// console.log(reversePairOfNums([1, 2, 3, 4, 5, 6, 4432]));

// Найдите сумму элементов этого объекта.

// function sumElements(obj) {
//   let sum = 0;
//   for (const key in obj) {
//     for (const key2 in obj[key]) {
//       sum += obj[key][key2];
//     }
//   }
//   return sum;
// }
// console.log(sumElements({
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }));

//Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

// function getFirstLetter(str) {
//   const newWords = [];
//   str.split(' ').forEach((word, i) => {
//     if (word[0].toLowerCase() === 'а') {
//       newWords.push(word);
//     }
//   })
//   return newWords;
// }
// console.log(getFirstLetter('Ахаё ай эм донт аоу'));


//Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

// function getNums(arr) {
//   const newArray = [];
//   arr.forEach((el, i) => {
//     if (el % 5 === 0) {
//       newArray.push(el);
//     }
//   })
//   return newArray;
// }
// console.log(getNums([5, 4, 3, 55, 1]));


//Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

// function getNums(arr) {
//   const newArray = [];
//   arr.forEach((el, i) => {
//     if (el.toString().includes('0')) {
//       newArray.push(el);
//     }
//   })
//   return newArray;
// }
// console.log(getNums([5, 0, 3, 50, 1]));

//Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3

// function getNums(arr) {
//   let hasDigitThree = false;
//   arr.forEach((el, i) => {
//     if (el.toString().includes('3')) {
//       hasDigitThree = true;
//     }
//   })
  
//   if (hasDigitThree) {
//     console.log('В массиве есть число содержащее в себе цифру 3');
//   } else {
//     console.log('В массиве нет числа содержащего в себе цифру 3');
//   }
// }
// getNums([5, 0, 3, 50, 1]);


//Дано некоторое число:
// 35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:
// 12345

// function sortNum(num) {
//   const arr = num.toString().split('');
//   const sortedArr = arr.sort((a, b) => a - b)
//   const sortedNum = parseInt(sortedArr.join(''));
//   return sortedNum;
// }
// console.log(sortNum(35142));

//Напишите программу, которая сформирует следующую строку:
// '-1-2-3-4-5-'

// function getLines(str) {
//   let newString = '';
//   str.split('').forEach((el, i) => {
//     newString += '-' + el;
//   })
//   return newString + '-';
// }
// console.log(getLines('12345783829'));

// function findSumElements(obj) {
  //   let sum = 0;
  //   for (const key in obj) {
  //     for (const key2 in obj[key]) {
  //       for (const nums in obj[key][key2]) {
  //         sum += obj[key][key2][nums];
  //       }
  //     }
  //   }
  //   return sum;
  // }
  // console.log(findSumElements({
  // 	1: {
  // 		1: {
  // 			1: 1,
  // 			2: 1,
  // 			3: 1,
  // 		},
  // 		2: {
  // 			1: 0,
  // 			2: 0,
  // 			3: 1,
  // 		},
  // 	},
  // 	2: {
  // 		1: {
  // 			1: 0,
  // 			2: 1,
  // 			3: 0,
  // 		},
  // 		2: {
  // 			1: 0,
  // 			2: 1,
  // 			3: 1,
  // 		},
  // 	},
  // 	3: {
  // 		1: {
  // 			1: 1,
  // 			2: 1,
  // 			3: 1,
  // 		},
  // 		2: {
  // 			1: 1,
  // 			2: 0,
  // 			3: 1,
  // 		},
  // 	},
  // }));

//Дано число, например, вот такое:
// let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.

// function checkIsNumPositive(num) {
//   num.toString().split('').forEach((num, i) => {
//     if (num === 0) {
//       console.log('Не все цифры этого числа больше нуля')
//       return;
//     }
//   })
  
//   console.log('Все цифры этого числа больше нуля');
  
//   РЕШЕНИЕ 2
  // while (num !== 0) {
  //   if (num % 10 === 0) {
  //     console.log("Не все цифры этого числа больше нуля");
  //     break;
  //   }
    
  //   num = Math.floor(num / 10);
  // }
// }
// checkIsNumPositive(123450);

//Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.

// function deleteNums(arr) {
//   const newArray = [];
//   arr.forEach((num, i) => {
//     if (num / 100 < 1)
//       newArray.push(num);
//   })
//   return newArray;
// }
// console.log(deleteNums([1, 122, 342, 3, 4]));

// Дан некоторый массив, например, вот такой:
// [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function splitArray(arr) {
//   let result = [];
//   arr.forEach(num => {
//     const arrNum = [];
//     while (num > 0) {
//       arrNum.push(num % 10);
//       num = Math.floor(num / 10);
//     }
    
//     result = [...result, ...arrNum.reverse()]
//   })
//   return result;
// }
// console.log(splitArray([123, 456, 789]));

// function sumElements(arr) {
  //   let sum = 0;
  //   for (const key in arr) {
  //     for (const nums in arr[key]) {
  //       sum += arr[key][nums];
  //     }
  //   }
  //   return sum;
  // }
  // console.log(sumElements([
  // 	{
  // 		1: 2,
  // 		2: 1,
  // 		3: 1,
  // 	},
  // 	{
  // 		1: 1,
  // 		2: 2,
  // 		3: 2,
  // 	},
  // 	{
  // 		1: 2,
  // 		2: 2,
  // 		3: 2,
  // 	},
  // ]));

  
//Дана строка со словами. Отсортируйте слова в алфавитном порядке.

// function sortWords(str) {
//   let arr = str.split(', ');
//   let strSorted = arr.sort();
//   return strSorted.join(', ');
// }
// console.log(sortWords("яблоко, банан, апельсин, груша"));

//Дано число. Получите массив делителей этого числа.

// function getDividers(num) {
//   let arrayOfDividers = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       arrayOfDividers.push(i);
//     }
//   }
//   return arrayOfDividers;
// }

// console.log(getDividers(27));


//Даны два числа. Получите массив общих делителей этих чисел.

// function getDividers(num1, num2) {
//   const arrayOfDividers = [];
//   for (let i = 1; i <= num1; i++) { // 1
//     if (num1 % i === 0 && num2 % i === 0) {
//       arrayOfDividers.push(i);
//     }
//   } 
//   return arrayOfDividers;
// }
// console.log(getDividers(30000, 10000));

//Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

// function countDividers(num) {
//   let count = 0;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       count ++;
//     }
//   }
//   if (count > 1) {
//     console.log('Не удовлетворяет условию')
//   } else if (count === 1) {
//     console.log('У этого числа есть 1 делитель')
//   } else {
//     console.log('Не удовлетворяет условию')
//   }
// }
// countDividers(27);

//Через запятую написаны числа. Получите максимальное из этих чисел

// function maxNum(...nums) {
//   return nums.sort((a, b) => a - b)[nums.length - 1]
// }
// console.log(maxNum(1, 2, 4, 5, 234, 2, 1));

//Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
// function pushNum(arr) {
//   return arr.map((num, i) => {
//     if (num / 10 < 1) {
//       num += num * 10;
//     }
    
//     return num;
//   })
// }
// console.log(pushNum([1, 2, 3, 45, 677]));

//Дана строка. Удалите из нее все гласные буквы.

// function deleteLetters(str) {
//   const result = []
  
//   str.split('').forEach((letter, i) => {
//     if (!"ауоыиэяюёе".includes(letter)){
//       result.push(letter)
//     }
//   })
  
//   return result.join('');
// }

// console.log(deleteLetters("привет"));

//Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

// function makeLetterHigh(str) {
//   let result = [];
//   str.split(' ').forEach(word => {
//     result.push(word.slice(0, word.length - 1) + word[word.length - 1].toUpperCase())
//   })
//   return result;
// }
// console.log(makeLetterHigh("привет как дела"));

// Найдите сумму элементов этой структуры.

// function sumNums(array) {
//   let sum = 0;
//   for (const obj in array) {
//     for (const key in array[obj]) {
//       for (const nums in array[obj][key]) {
//         sum += array[obj][key][nums];
//       }
//     }
//   }
//   return sum;
// }
// console.log(sumNums([
// 	{
// 		1: [1, 0, 0],
// 		2: [1, 0, 0],
// 		3: [1, 0, 0],
// 	},
// 	{
// 		1: [1, 0, 0],
// 		2: [1, 0, 0],
// 		3: [1, 0, 0],
// 	},
// 	{
// 		1: [1, 0, 0],
// 		2: [1, 0, 0],
// 		3: [1, 0, 0],
// 	},
// ]));

//Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.
// function checkNums(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//       count++;
//     } else {
//       console.log('не все числа из этого массива содержат в себе цифру 3.')
//       break;
//     }
//   }
//   if (count === arr.length) {
//     console.log('все числа из этого массива содержат в себе цифру 3.')
//   }
// }
// checkNums([3, 3, 3, 3, 3]);

//Дана строка в формате:
// 'kebab-case'
// Преобразуйте ее в формат:
// 'snake_case'

// function changeFormat(str) {
//   return str.split('-').join('_');
// }

// const changeFormat = (str) => str.split('-').join('_');
// console.log(changeFormat('kebab-case'));

//Дана строка в формате:

// 'snake_case'
// Преобразуйте ее в формат:
// 'camelCase'

// function changeFormat(str) {
//   let result = '';
//   let arr = str.split('_')
//   for (let i = 1; i < arr.length; i++) {
//     result += arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
//   return result;
// }
// console.log(changeFormat('kebab_case_kebab_case_Efef_433rwef_#dfefekebab_case_kebab_case_Efef_433rwef_#dfefe'));


//Дана строка в формате:
// 'camelCase'
// Преобразуйте ее в формат:
// 'snake_case'

// function changeFormate(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       result += '_' + str[i].toLowerCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(changeFormate('camelCaseCamel'));

//Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

// let result = [];
// for (let i = 0; i < 5; i++) {
//   let innerArray = [];

//   for (let j = 1; j < 4; j++) {
//     innerArray.push(j);
//   }
//   result.push(innerArray);
// }
// console.log(result);

//Дана строка. Проверьте, что эта строка состоит только из цифр.

// function checkString(str) {
//   let count = 0;
//   let arr = str.split('');
//   arr.forEach(num => {
//     if (!'1234567890'.includes(num)) {
//       count++;
//       console.log('строка состоит НЕ только из цифр');
//     }
//   })
//   if (count === 0) {
//     console.log('строка состоит только из цифр');
//   }
// }
// checkString('12 2 5 0');

//Дана строка. Проверьте, что эта строка состоит только из четных цифр.

// function checkString(str) {
//   let count = 0;
//   const arr = str.split(' ')
//   arr.forEach(num => {
//     if (num % 2 === 0) {
//       count++;
//     }
//   })
//   if (count === arr.length) {
//     console.log('эта строка состоит только из четных цифр')
//   } else {
//     console.log('эта строка состоит НЕ только из четных цифр')
//   }
// }
// checkString('12 2 3');

//Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

// function deleteNums(arr) {
//   let result = arr.filter(num => num.toString().split('0').length <= 2);
//   return result;
// }
// console.log(deleteNums([1, 2, 300, 505, 1000, 30003, 300000000003]));


//Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

// function sumNums() {
//   let result = [];
//   for (let i = 1; i <= 1000; i++) {
//     let innerResult = 0;
//     let num = i;
//     while (num > 0) {
//       innerResult += num % 10;
//       num = Math.floor(num / 10);
//     }
//     if (innerResult === 13) {
//       result.push(i);
//     }
//   }
//   return result.join(',');
// }

// console.log(sumNums());



//Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза

// function doubleEl(arr) {
//   let joinNums = [];
//   arr.forEach(num => {
//     joinNums.push(num)    
//     joinNums.push(num)
//   })
//   return joinNums;
// }
// console.log(doubleEl([1, 2, 3]));

//Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.

// function leaveNums(arr, num) {
//   const result = [];
//   arr.forEach(number => {
//     if (num % number === 0) {
//       result.push(number);
//     }
//   })
//   return result;
// }
// console.log(leaveNums([1, 3, 27, 7], 27));



// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

// function makeArray(num1, num2) {
//   const result = [];
//   const digitsOfNum1 = Array.from(String(num1), Number);
//   const digitsOfNum2 = Array.from(String(num2), Number);
  
//   for (const digit of digitsOfNum1) {
//     if (digitsOfNum2.includes(digit) && !result.includes(digit)) {
//       result.push(digit);
//     }
//   }
//   return result;
// }
// console.log(makeArray(123, 324));

//Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

// function makeArrayOfPositions(num) {
//   const result = [];
//   const arr = num.toString().split('');
//   arr.forEach((number, i) => {
//     if (number === "3") {
//       result.push(i);
//     }
//   })
//   return result.slice(1, -1);
// }
// console.log(makeArrayOfPositions(1353734343));


//Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.

// function leaveNums(arr) {
//   const result = [];
//   const dividedNum = [];
//   arr.forEach(num => {
//     while (num > 0) {
//       dividedNum.push(num % 10)
//       num = Math.floor(num / 10);
//     }
//   })
// }
// console.log(leaveNums([111, 345, 567, 334]));


//Сделайте функцию, которая вернет текущий день недели словом.

// function getDayOfWeek(day) {
//   let weekDay = '';
//   switch (day) {
//     case 1:
//       weekDay = 'Monday';
//       break;
//     case 2:
//       weekDay = 'Tuesday';
//       break;
//     case 3:
//       weekDay = 'Wednesday';
//       break;
//     case 4:
//       weekDay = 'Thursday';
//       break;
//     case 5:
//       weekDay = 'Friday';
//       break;
//     case 6:
//       weekDay = 'Sunday';
//       break;
//     case 7:
//       weekDay = 'Saturday';
//       break;
//     default:
//       weekDay = 'Такого дня недели не существует';
//   }
// }
// getDayOfWeek(8);

// <div>{weekDay}</div>


//Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.

// function getDayOfWeek(date) {
//   const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//   const dayIndex = new Date(date).getDay();
  
//   return daysOfWeek[dayIndex];
// }
// console.log(getDayOfWeek('2024-05-03'));


//Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

// function getQuantityDays(seconds) {
//   let quantity = (seconds / 84600).toFixed(0);
//   return quantity;
// }
// console.log(getQuantityDays('100000'));

//Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.

// function cutString(length, str) {
//   str = str.slice(0, -length);
//   return str;
// }
// console.log(cutString(9, 'Ари самая любимая акула-рабынька'));


//Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.

// function getSumDivisors(num) {
//   let sumDivisors = 0;
//   for (let i = 0; i <= num; i++) {
//     if (num % i === 0) {
//       sumDivisors += i;
//     }
//   }
//   return sumDivisors;
// } 
// console.log(getSumDivisors(27));

//Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

// function sumNums(num) {
//   let sumNumbers = 0;
//   let arr = num.toString().split('');
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (num % 10 > 0) {
//       sumNumbers += (num % 10);
//       num = Math.floor(num / 10);
//     }
//   }
//   return sumNumbers;
// }
// console.log(sumNums(22));

//Сделайте функцию, которая параметром будет принимать число и удалять из него нули

// function deleteZero(num) {
//   const arr = num.toString().split('');
//   let newArr = '';
//   arr.forEach(digit => {
//     if (digit !== '0') {
//       newArr += digit;
//     }
//   })
//   return parseInt(newArr);
// }
// console.log(deleteZero(23076087000));

//Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.

// function getDays(data) {
//   let daysPassed = 0;
//   let daysLeft = 0;
//   let targetDate = new Date();
//   let currentDate = new Date(data)
//   if (currentDate > targetDate) {
//     return daysLeft += Math.floor((currentDate - targetDate) / (1000*60*60*24));
//   } else {
//     return daysPassed += Math.floor((targetDate - currentDate) / (1000*60*60*24));
//   }
// }
// console.log(getDays('2024-05-02'));

//Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.

// function isYearLeap(year) {
//   if (year % 4 === 0) {
//     console.log('Год является високосным');
//   } else {
//     console.log('Год Не является високосным');
//   }
// }
// isYearLeap('2222');

//Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

// function leapYears() {
//   const arr = [];
//   for (let i = 2024; i >= 1924; i--) {
//     if (i % 4 === 0) {
//       arr.push(i)
//     }
//   }
//   return arr;
// }
// console.log(leapYears());

//Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.

// function daysLeftInMonth() {
//   const currentDate = new Date();
//   const currentMonth = currentDate.getMonth();
//   const currentYear = currentDate.getFullYear();
//   const nextMonth = currentMonth + 1;
//   const firstDayNextMonth = new Date(currentYear, nextMonth, 1);
//   const lastDayCurrentMonth = new Date(firstDayNextMonth - 1);
//   const allDaysOfMonth = lastDayCurrentMonth.getDate();
//   const remainingDays = allDaysOfMonth - currentDate.getDate();
  
//   return remainingDays;
// }

// console.log(daysLeftInMonth());

//Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }

// function getDay() {
//   const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//   const dateNow = new Date();
//   const yestarday = new Date(dateNow);
//   yestarday.setDate(dateNow.getDate() - 1);
//   const tomorrow = new Date(dateNow);
//   tomorrow.setDate(dateNow.getDate() + 1)
//   const indexOfDay1 = dateNow.getDay();
//   const indexOfDay2 = yestarday.getDay();
//   const indexOfDay3 = tomorrow.getDay();
//   const Day1 = daysOfWeek[indexOfDay1];
//   const Day2 = daysOfWeek[indexOfDay2];
//   const Day3 = daysOfWeek[indexOfDay3];
//   const objWithDays = {
//     next: Day3,
//     curr: Day1,
//     prev: Day2,
//   }
//   return objWithDays;
// }
// console.log(getDay());


//Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.
// function deleteDubles(arr) {
//   const result = [];
//   arr.forEach(el => {
//     if (!result.includes(el)) {
//       result.push(el);
//     }
//   })
//   return result;
// }
// console.log(deleteDubles([1, 2, 2, 3, 4, 3, 5]));


// Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.
// function deleteDuplicatesNear(arr) {
//   const result = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       result.push(arr[i]);
//     }
//   }
  
//   return result;
// }
// console.log(deleteDuplicatesNear([1, 1, 1, 2, 3, 3, 4, 5, 2]));

// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
// {
// 	max: 9,
// 	min: 1,
// }

// function getMaxMin(arr) {
//   const sortedArr = arr.sort();
//   let lastNum = 0;
//   for (let i = 0; i < sortedArr.length; i++) {
//     lastNum = arr[arr.length - 1] 
//   }
//   const obj = {
//     max: lastNum,
//     min: sortedArr[0],
//   }
//   return obj;
// }
// console.log(getMaxMin([1, 3, 4, 9, 2, 1]));
 

// Сделайте функцию, которая параметром будет принимать число, и выводить количество его делителей.

// function getDividers(num) {
//   let count = 0;
//   for (let i = 0; i <= num / 2; i++) {
//     if (num % i === 0) {
//       count ++;
//     }
//   }
//   return count + 1;
// }
// console.log(getDividers(27));

// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.

// function getArrayDividers(num) {
//   const result = [];
//   for (let i = 0; i <= num; i++) {
//     if (num % i === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(getArrayDividers(27));
 

//Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

// function isNumSimple(num) {
//   let isJustNum = true;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isJustNum = false;
//       console.log('Число НЕ простое');
//       break;
//     }
//   }
  
//   if (num === 1) {
//     console.log('Число НЕ простое');
//   } else if (isJustNum) {
//     console.log('Число простое');
//   }
// }
// isNumSimple(1);


// Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры

// function deleteEvenDigits(num) {
//   const arr = num.toString().split('');
//   const result = [];
//   arr.forEach(digit => {
//     if (digit % 2 !== 0) {
//       result.push(digit);
//     }
//   })
//   return parseInt(result.join(''));
// }
// console.log(deleteEvenDigits(245671));


// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

// function randomNums(arr) {
//   for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 10));
//   }
//   return arr;
// }
// console.log(randomNums([]));

//  [youngest age, oldest age, difference between the youngest and oldest age].

// function differenceInAges(ages){
//   let maxAge = 0;
//   let minAge = 999999;
//   for (let i = 0; i < ages.length; i++) {
//     if (ages[i] > maxAge) {
//       maxAge = ages[i]
//     }
//     if (ages[i] < minAge){
//       minAge = ages[i]
//     }
//   }
//   return [minAge, maxAge, maxAge - minAge];
// }


// function squareSum(numbers){
//   let sum = 0;
//   numbers.forEach(num => {
//     sum += Math.pow(num, 2);
//   })
//   return sum;
// }
// console.log(squareSum([2, 2, 1]));