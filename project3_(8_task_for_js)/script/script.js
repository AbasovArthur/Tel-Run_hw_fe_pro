/*
https://prog-center.pro/frontend/6
Напишите цикл for, который выводит числа в консоль от 10 до 0.
```````````````````done!
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
*/
/*
https://prog-center.pro/frontend/8
В программе заданы две переменные n и m с числовым значением каждая. Число n больше числа m. Напишите цикл, который выводит в консоль все четные числа от m до n. 
```````````````````done
*/
/*
const n = 10;
const m = 2;

for (let i = m; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
*/
/*
https://prog-center.pro/frontend/14
Напишите функцию, range, которая принимает два аргумента (n и m) с числовым значением и возвращает массив с числами от меньшего до большего -1.
```````````````````done

function range(n, m) {
  let result = [];
  let start = n < m ? n : m;
  let end = n > m ? n : m;

  for (let i = start; i < end; i++) {
    result.push(i);
  }

  return result;
}
console.log(range(4, 6));
*/
/*
https://prog-center.pro/frontend/17
Создайте функцию handler, которая принимает два аргумента, массив и число. Функция должна сформировать новый массив на основе заданного и исключить из него указанное число.
Для решения задачи используйте метод массива filter.
```````````````````done!

function handler(arr, num) {
  return arr.filter(function(item) {
    return item !== num;
  });
}
const arr = [1, 2, 3, 4, 5];
const num = 3;
const newArr = handler(arr, num);
console.log(newArr);
*/
/*
https://prog-center.pro/frontend/18
Создайте функцию handler, которая принимает в качестве аргумента массив с положительными и отрицательнцми числами, формирует новый массив, в котором все отрицательные значения преобразованы в положительные и возращает новый массив.

Для решения задачи используйте метод массива map.
```````````````````done!

function handler(arr) {
  return arr.map(function(num) {
    if (num < 0) {
      return -num;
    } else {
      return num;
    }
  });
}
const arr = []
const result = handler(arr);
console.log(result);
*/
/*
https://prog-center.pro/frontend/20
Создайте функцию handler, которая принимает в качестве аргумента массив с положительными числами, формирует новый массив после дедубликации (удалены все повторяющиеся числа).

Для решения задачи используйте метод массива filter.
```````````````````done!
*/
/*
function handler(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === num) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(num);
    }
  }

  return result;
}
*/
/*
function handler(arr) {
  return arr.filter(function(num, index) {
    return arr.indexOf(num) === index;
  });
}
*/
/* входн данные:
const input1 = [1, 2, 3, 3, 4, 5, 5, 6];
const output1 = handler(input1);
console.log(output1); 
const input2 = [10, 20, 30, 20, 40, 50, 10];
const output2 = handler(input2);
console.log(output2);
*/
/*
Создайте функцию handler, которая принимает в качестве аргумента массив со строками и возвращает новый массив из длинн этих строк. 

Для решения задачи используйте метод массива map.
```````````````````done!
*/
/*
function handler(arr) {
  const result = arr.map(function(str) {
    return str.length;
  });
  return result;
}
const arr = ['слон', 'колодец', 'тетрапак'];
const result = handler(arr);
console.log(result);
*/
/*
Создайте функцию handler, которая принимает в качестве аргументов массив с числами и строками и число.
Функция должна в первую очередь отфильтровать массив и оставить только числа. На основе полученного после фильтрации массива необходимо сформировать массив, в котором все числа возведены в степень числа, полученного в качестве второго аргумента функции handler.

Для решения задачи используйте методы массива filter и map.
```````````````````done!
*/
/*
function handler(arr, num) {
  const numbers = arr.filter(function(el) {
    return typeof el === 'number';
  });

  const poweredNumbers = numbers.map(function(el) {
    return Math.pow(el, num);
  });

  return poweredNumbers;
}
const arr = ["велосипед", 12, "стена", 13];
const power = 12;

const result = handler(arr, power);
console.log(result);
*/












