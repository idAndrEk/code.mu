/* 
let i = 1;
while (i <=100) {
    console.log(i);
    i++;
}

let i = 11;
while (i <= 33){
    console.log(i);
    i++;
}

let i = 0;
while (i <= 100) {
    console.log(i);
    i += 2;
}

let i = 1;
while (i <= 99){
    console.log(i);
    i += 2;
}

let i = 30;
while (i >= 0) {
    console.log(i);
    i --;
}

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (let i = 11; i <= 33; i++) {
    console.log(i);
}

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

for (i = 1; i <= 99; i += 2) {
    console.log(i);
}

let arr = ['a', 'b', 'c', 'd', 'e'];
for ( i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arr = [1, 2, 3, 4, 5];
    	
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}

let arr = [1, 2, 3, 4, 5];
for (i = 0; i <= 5; i++) {
    if (arr[i] % 2 - 1 == 0) {
        console.log(arr[i])
    }
}

let result = 0;
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}

console.log(result);

let result = 1;
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result);

let arr = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr[i] * arr[i];
}
console.log((result));


let arr = [2, 5, 9, 15, 1, 4];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i])
    }
}


let arr = [1, -90, -5, 1, 24, 23];
result = 0;
for (i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0){
        result += arr[i];
    }
}
console.log(result);


let arr = [10, 20, 30, 50, 235, 3000];
let result = 0;
for (i = 0; i < arr.length; i++){
    if (String(arr[i]).startsWith('1') || String(arr[i]).startsWith('2')|| String(arr[i]).startsWith('5')) {
        console.log(arr[i]);
    }
}

let arr = [10, 20, 30, 50, 235, 3000];
console.log(arr.reverse());

let arr = [1, 1, 3, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
if (arr[i] == i) {
    console.log(arr[i]);
}
}

let arr = [10, 20, 30, 50, 235, 3000];
for (i = 0; i <= arr.length - 1; i++) {
    document.write(arr[i]) + '<br>';
}

let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', ' ПТ', 'СБ', 'ВС'];
for (i = 0; i < arr.length; i++){
    if (arr[i] == 'СБ' && arr[i] == 'ВС') {
        document.write(arr[i] + '<b>' + ' ');
    } else {
        document.write(arr[i] + ' ');
    }
}


let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', ' ПТ', 'СБ', 'ВС'];
let day = 0;
for (i = 0; i <= arr.length; i++) {
    if (i == day) {
        document.write('i' + arr[i] + '</i> br />');
    }
    else {
        document.write(arr[i] + 'br />');
    }
}

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    console.log(elem);
}

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
    console.log(elem);
}

let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of arr) {
    sum += elem;
}
console.log(sum);

let arr = ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь' ];
for (let elem of arr) {
    console.log(elem);
}

let arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let month = 'Май';
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == month) {
        result = '<i>'+ month + '</i>'
        document.write(arr + result + '<br>');
    }
}

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let result = 0;
for (let sum in obj) {
    result += obj[sum];
}

console.log(result);

for (let i = 0, j = 0; i <= 9; i++, j += 2) {
    console.log(i, j);
}


let arr = [1, 2, 3, 0, 4, 5];
for (let elem of arr) {
    if (elem === 0) {
        console.log('OK');
        break;
    }
}

let arr = [1, 2, 10, 95, -3, 0, 4, 5];
let result = 0;
for (i = 0; i <= arr.length; i++) {
    result += arr[i];
    if (arr[i + 1] < 0) {
        break;
    }
}
console.log(result);

let arr = [1, 2, 10, 95, -3, 0, 3, 4, 5];
let result = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        result = i;
        break;
    }
}
console.log(result);


let result = 0;
for (i = 0; i < 100; i++) {
    result += i;
    if (result > 100) {
        break;
    }
}
console.log(i);

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
    if (elem === 'c') {
        flag = true;
        break;
    }
}
if (flag === true) {
    console.log('OK');
} else {
    console.log('NO');
}

let num = 21;
let flag = true;
for (i = 2; 0 < num; i++) {
    if (num % i == 0) {
        flag = false;
        break;
    }
}
console.log(flag);

let num = 21;
let result = 0;
while (num <= 1000) {
    num *= 3;
    result++
}
console.log(result);

*/


let num = 21;
let result = 0;
for (i = 0; i <= 1000; i++){
    num *= 3;
    if (num === 1000) {
        
    }
}
