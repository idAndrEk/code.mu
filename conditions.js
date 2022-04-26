/*
let test = 55;
if (test > 10){
    console.log('Верно');
} else {
    console.log('Неверно');
}

let test = 50;
if (test == 10) {
    console.log('Верно');
} else {
    console.log('Неверно');    
}

let test = 50;
if (test != 10) {
    console.log('Верно');
} else {
    console.log('Неверно');    
}

let test1 = 55;
let test2 = 44;
if (test1 > test2) {
console.log('Верно');
} else {
    console.log('Неверно');
}

let num = 4;
if (num > 0 && num < 5){
    console.log('YES');
} else {
    console.log('NO');
}

let num2 = 11;
if (num2 >= 10 && num2 <= 20){
    console.log('YES');
} else {
    console.log('NO');
}

let numB = 2;
let numA = 1;
if (numB <= 1 && numA >= 3){
    console.log('YES');
} else {
    console.log('NO');
}

let num = 3;
    	
if ((num > 5 && num < 10) || num == 20) {
    console.log('верно');
} else {
    console.log('неверно');
}

let num = 3;
    	
if (num > 5 || (num > 0 && num < 3)) {
    console.log('верно');
} else {
    console.log('неверно');
}

let num = 3;
    	
if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) { 
    console.log('верно');
} else {
    console.log('неверно');
}

let num1 = 3;
let num2 = 5;

if (!(num1 >= 0 || num2 <= 10)) {
    console.log('верно');
} else {
    console.log('неверно');
}

let test = true;
if (test === true){
    console.log('OK');
} else {
    console.log('NO')
};


let test2 = false;
if (test2 === false){
    console.log('OK');
} else {
    console.log('NO');
}

let test = true;

if (test) {
    console.log('верно');
} else {
    console.log('неверно');
}

let test = 10;
if (test == 10){
    console.log('OK')
};

let day = 2;
if (day >= 1 && day <= 10) {
    console.log('Первая декада');
} if  (day >= 11 && day <= 20) {
    console.log('Вторая декада');
} if (day >= 21 && day <= 31){
    console.log('Третья декада');
}

let day = 2;
if (day >= 1 && day <= 10) {
    console.log('Первая декада');
} else if  (day >= 11 && day <= 20) {
    console.log('Вторая декада');
} else if (day >= 21 && day <= 31){
    console.log('Третья декада');
}

let day = 33;
if (day >= 1 && day <= 10) {
    console.log('Первая декада');
} else if  (day >= 11 && day <= 20) {
    console.log('Вторая декада');
} else if (day >= 21 && day <= 31){
    console.log('Третья декада');
} else {
    console.log('Неверное значение');
}

let num = 98;
if (num <= 10 || num >= 99) {
    console.log('Не попадает в диапозон');
} else {
    let num2 = num%10;      // 27/10 = остаток 7
    let num1 = (num-num2)/10;      //27-7 = 20/10 = 2
    let sum = num1+num2;
    console.log (sum, 'сумма цифр');
    if (sum <= 9) {
        console.log ('Сумма цифр однозначна');
    } else {
        console.log ('Сумма цифр двузначна');
    }
}

let age = 17;
let adult;
if (age >= 18) {
    adult = true;
} else {
    adult = false;
}

console.log(adult);

let age = 17;
let adult;

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}

console.log(adult);

let age = 17;
let adult;

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}

console.log(adult);

let age = 37;
let result;

if (age >= 18) {
    if (age <= 23) {
        result = 'от 18 до 23';
    } else {
        result = 'больше 23';
    }
} else {
    result = 'меньше 18';
}

console.log(result);

let age = 19;
let result;

if (age >= 18) {
    result;

    if (age <= 23) {
        result = 'от 18 до 23';
    } else {
        result = 'больше 23';
    }
} else {
    result = 'меньше 18';
}

console.log(result);

let min = 10;
if (min >= 1 && min <= 20) {
    console.log ('Первая треть часа');
} if (min >=21 && min <= 40) {
    console.log('Вторая треть часа');
} if (min <= 41 && min >= 60) {
    console.log('Третья треть часа');
} 

let arr = [1, 3, 7];
if (arr.length == 3){
    console.log(arr[0] + arr[1] + arr[2])
} if (arr.length > 3) {
    console.log('Более трёх элементов');
}

let num = 201;
let str = String(num);
if (str[str.length - 1] == 0) {
    console.log('Равно 0');
} else {
    console.log('Не равно 0');
}

let num1 = 2112122143181;
let num = String(num1);
if (num[num.length - 1] == 0 || num[num.length - 1] == 2 || num[num.length - 1] == 4 || num[num.length - 1] == 6 || num[num.length - 1] == 8) {
    console.log((num[num.length - 1]), 'четное');
} else {
    console.log((num[num.length - 1]), 'нечетное');
}


let month = 2;
if (month === 1 || month === 2 || month === 11 || month === 12) {
    console.log('Зима');
} if (month === 3 || month === 4) {
    console.log('Весна');
} if (month >= 5 && month <= 8) {
    console.log('Лето');
} if (month === 9 || month === 10) {
    console.log('Осень');
} if (month <= 0 || month >= 13) {
    console.log('Не верно');
}

let str = 'abcde';
if (str[0] === 'a') {
    console.log('Да');
} else {
    console.log('Нет');
}

let num = 12345;
let str = String (num);
if (str[0] >= 1 && str[0] <= 3) {
    console.log('Да');
} else {
    console.log('Нет');
}

let num = 123;
let str = String(num);
let sum = Number(str[0]) + Number(str[1]) + Number(str[2]); 
console.log(sum);


let num = 123113;
let str = String(num);
if (Number(str[0]) + Number(str[1]) + Number(str[2]) === Number(str[3]) + Number(str[4]) + Number(str[5])) {
    console.log('Да');
} else {
    console.log('Нет');
}

let num = 3;
switch (num) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('весна');
        break;
    case 3:
        console.log('лето');
        break;
    case 4:
        console.log('осень');
        break;
    default:
        console.log('ошибка');
}

let num = 23;
let result = num >= 0 ? 1 : -1;
console.log(result);

let a = 2 * (3 - 1);
let b = 6 - 2;
result = a == b;
console.log(result);
console.log(a == b);

let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
console.log(a > b);

let a = 2 ** 4;
let b = 4 ** 2;
console.log(a != b);

let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = 1;
let num2 = 2;

if (Number(num1 + num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;
let str = String(num);
if (str[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;

if (String(num)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;

if (String(num)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;
let first = String(num);

if (first[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num = '12';

if (num.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;
let str = String(num);

if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = '123033'; // берем в 	кавычки, чтобы обращаться к цифрам 

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}
*/

let num = '123033'; // берем в 	кавычки, чтобы обращаться к цифрам 

let sum1 = +num[0] + (+num[1]) + (+num[2]);
let sum2 = +num[3] + (+num[4]) + (+num[5]);

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}