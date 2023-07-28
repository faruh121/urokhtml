// console.log("Hello world")
// console.log(10/0)
// let h2 = document.querySelector('h2')
//  setTimeout(()=>{h2.innerText = 'safari'},3000)
// //@ts-ignore - игнорировать предупреж
// alert('hi')
// let message = 1
// message = 2+2+3
// const daysInWeek = 7
// console.log(daysInWeek)
// const  x = prompt("Enter number",0)

// let num = 10
// num =+'10'
// //number
// console.log('typeof(15)',typeof(15))
// console.log('typeof(NaN)',typeof(NaN))
// console.log('typeof(Infinity)',typeof(Infinity))
// console.log('typeof(-Infinity)',typeof(-Infinity))
// console.log('2578934578934573057',2578934578934573057)
// //bigint
// console.log('typeof(6498675894675496759467895476954768946794567)',typeof(6498675894675496759467895476954768946794567))
// // string
// let str = "HI";
// let str2 = 'solo kovichki'
// //интерполяция (шаблонная строка)
// let phrase = `обратные ковычки позволяют выстраивать перенменные ${str}${num*5}`
// // конкатенация (сложение строк)
// console.log('phrase+str2',phrase+str2)
// // Bolean
// true//правда
// false//не правда

// // null
// null//ничего

// undefined//прсвоено знач

// // let age;
// // console.log(age);//вывод undefined

// // let result =confirm("что есть что?")
// // console.log(result)

// let s1 = 3
// let s2 = 4
// console.log('4>3',4>3)
// console.log('4<3',4<3)
// console.log('4 == 3',s1==s2)
// console.log('4!=3',s1!=s2)

//  console.log('"b" > "a" , "b" > "a"')

// console.log('num "0"', "0".charCodeAt(0))

// console.log('num "A"', "A".charCodeAt(0))
// console.log('num "B"', "B".charCodeAt(0))

// console.log('num "a"', "a".charCodeAt(0))

// console.log('num "А"', "А".charCodeAt(0))
// console.log('num "Б"', "Б".charCodeAt(0))
 
// let s3 = 0
// let s4 = 0
// console.log('null == undefined',null == undefined)
// console.log('null === undefined',null === undefined)

// const SECRET = "1233"
// const pass = prompt("enter pass")
// if (SECRET == pass){
//     console.log("succses!")}                                                                                      
// else{
//     console.log("erorr")
// } 



//  let a = +prompt("enter number")
//  if (a>0){
//      alert("положительное")
//  }
// else if (a<0){
//     alert("отрицательное")
// }
// else{
//     alert("это ноль)")
// }

// let b = +prompt("скольок тебе лет")
// if (b<=120){
//     alert("все верно")
// }
// else{
//     alert("не правельно")
// }

// let c = +prompt("введите часы")
// let q = +prompt("введите минуты")
// let r = +prompt("введите секунды")
// if (c<=24){
//     alert("все ок")
// }
// else{
//     alert("не правельно ")
// }
// if (q<=60){
//     alert("все ок")
// }
// else{
//     alert("не правельно ")
// }
// if (r<=60){
//     alert("все ок")
// }
// else{
//     alert("не правельно ")
// }


// let x =+prompt("по x")
// let y = +prompt(" по y")
// if (x > 0 && y > 0){
//     alert("2 четверть")
// }
// else if (x<0 && y <0){
//     alert("4 четверть")
// }
// else if (x>0 && y <0){
//     alert("3 четверть")
// }
//else if (y==0 && x == 0){
//    alert("центр")
//}
// else{
//     alert("1 четверть")
// }

// let login = prompt("введите логин")
// if (login === 'Admin') {
//   let password = prompt('введите пароль')
//   if (password == '2345') {
//     alert( 'приветствую' )
//   } 
//   else if (password == '' || password == null) {
//     alert( 'отмена' )
//   } 

//   else {
//     alert( 'пароль не верный' )
//   }

// }
//  else if (login === '' || login === null) {
//   alert( 'отмена' )
// } 
// else {
//   alert( "логин не зарегестрирован" )

//dz JS_DZ_Module_1_Week_3
//   function z1() {
//     let a = Math.trunc(
//       +prompt("Задайте целое число, которое будет началом диапазона: ")
//     );
//     let a1 = a;
//     let b;
//     do {
//       b = Math.trunc(
//         +prompt("Задайте целое число, которое будет концом диапазона: ")
//       );
//     } while (a >= b);
//     let summa = 0;
//     while (a <= b) {
//       summa += a;
//       a++;
//     }
//     alert(`В диапазоне от ${a1} до ${b} включительно сумма всех чисел составляет: ${summa}.`);
//   }
//  z1();
//   function z2() {
//     let n = +prompt("Введите первое число: ");
//     let m = +prompt("Введите второе число: ");
//     let new_n = Math.abs(n);
//     let new_m = Math.abs(m);
//     let max_divisor = 1;
//     let i = 1;
//     while (i <= new_n && i <= new_m) {
//       if (new_n % i == 0 && new_m % i == 0) {
//         max_divisor = i;
//       }
//       i++;
//     }
//     alert(`У чисел ${n} и ${m} наибольший общий делитель: ${max_divisor}`);
//   }
// z2();
//   function z3() {
// let n = +prompt("Введите число: ");
//     let new_n = Math.abs(n);
//     let divisors = "";
//     let i = 1;
//     do {
//       if (new_n % i == 0) {
//         divisors += i + ",";
//       }
//       i++;
//     } while (i <= new_n);
//     alert(`У числа ${n} следующие делители: ${divisors}`);
//   }
// z3();
//   function z4() {
//  let n = Math.abs(+prompt("Введите число: "));
//     let counter = 0;
//     while (n > 0) {
//       n = Math.trunc(n / 10);
//       counter++;
//     }
//     alert(`В введенном вами числе (в его целой части) ${counter} цифр.`);
//   }
// z4();
//   function z5() {
//     let n = 0;
//     let positive_number = 0;
//     let negative_number = 0;
//     let null_number = 0;
//     let even_number = 0;
//     let odd_number = 0;
//     for (let i = 0; i < 10; i++) {
//       n = +prompt("Введите число: ");
//       if (n > 0) {
//         positive_number += 1;
//       } else if (n < 0) {
//         negative_number += 1;
//       } else {
//         null_number += 1;
//       }
//       !(n % 2) ? (even_number += 1) : (odd_number += 1);
//     }
//     alert(
//       `Из 10 введеных вами чисел ${positive_number} положительных, ${negative_number} отрицательных, ${null_number} равных нулю, ${even_number} четных и ${odd_number} нечетных.`
//     );
//   }
// z5();
//   function z6() {
//     let numberA = 0;
//     let numberB = 0;
//     let result = true;
//     let action_sign = "";
//     do {
//       numberA = +prompt("Введите первое число: ");
//       numberB = +prompt("Введите второе число: ");
//       action_sign = prompt("Введите знак операции (*, /, + либо -): ");
//       switch (action_sign) {
//         case "+":
//           alert(
//             `${numberA} ${action_sign} ${numberB} = ${numberA + numberB}`
//           );
//           break;
//         case "-":
//           alert(
//             `${numberA} ${action_sign} ${numberB} = ${numberA - numberB}`
//           );
//           break;
//         case "*":
//           alert(
//             `${numberA} ${action_sign} ${numberB} = ${numberA * numberB}`
//           );
//           break;
//         case "/":
//           alert(
//             `${numberA} ${action_sign} ${numberB} = ${numberA / numberB}`
//           );
//           break;
//         default:
//           alert(`Вы не ввели знак математической операции!`);
//           break;
//       }
//       result = confirm("Хотите выполнить еще одну математическую операцию?");
//     } while (result == true);
//   }
// z6();
//   function z7() {
// let base_number = prompt("Введите число, которое будем трансформировать: ");
//     let jump = Math.abs(
//       Math.trunc(
//         +prompt("Введите, на сколько позиций вы хотите произвести сдвиг: ")
//       )
//     );
//     let arr = base_number.split("");
//     jump = jump % arr.length; 
//     let leftJump_L = arr.slice(0, jump); 
//     let leftJump_R = arr.slice(jump, arr.length); 
//     alert(
//       `Сдвиг влево "${base_number}" на ${jump} позиций:  ` +
//         leftJump_R.concat(leftJump_L).join("")
//     ); 
//     let rightJump_L = arr.slice(0, arr.length - jump); 
//     let rightJump_R = arr.slice(arr.length - jump, arr.length); 
//     alert(
//       `Сдвиг вправо "${base_number}" на ${jump} позиций:  ` +
//         rightJump_R.concat(rightJump_L).join("")
//     ); 
//   }
//   z7();
  
  
  
  
//   function z9() {
//     let table = "";
//     for (let i = 2; i <= 9; i++) {
//       for (let j = 1; j <= 10; j++) {
//         table += `${i} x ${j} = ` + i * j + ", ";
//       }
//     }
//     alert(table);
//   }
//   z9();



//dz2
// function a1() {
//     function Compare(a, b) {
//       if (a < b) {
//         return -1;
//       } else if (a > b) {
//         return 1;
//       } else if (a == b) {
//         return 0;
//       } else {
//         return "Вы ошиблись при вводе чисел";
//       }
//     }
//     let x = +prompt("Введите первое число для сравнения ");
//     let y = +prompt("Введите второе число для сравнения ");
  
//     alert(Compare(x, y));
//   }
//   a1();
  
  
  
//   function a2() {
//     function Factorial(n) {
//       if (n == 1) return 1;
//       return n * Factorial(n - 1);
//     }
//     let x = 1;
//     do {
//       x = Math.trunc(
//         +prompt("Для вычисления факториала введите положительное число от 1: ")
//       );
//     } while (x < 1);
//     alert(Factorial(x));
//   }
//   a2();
  
  
//   function a3() {
//     function Splitter(a, b, c) {
//       return a * 100 + b * 10 + c;
//     }
  
//     alert(
//       "Задание 3: Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149."
//     );
//     let x = 0;
//     let y = 0;
//     let z = 0;
//     do {
//       x = Math.trunc(Math.abs(+prompt("Введите первое число: ")));
//       y = Math.trunc(Math.abs(+prompt("Введите второе число: ")));
//       z = Math.trunc(Math.abs(+prompt("Введите третье число: ")));
//     } while (x > 9 || y > 9 || z > 9);
//     alert(Splitter(x, y, z));
//   }
//   a3();
  
  
//   function a4() {
//     function Square(a, b) {
//       if (arguments.length == 1) {
//         return a * a;
//       }
//       return a * b;
//     }

//     alert(Square(3, 4));
//     alert(Square(3));
//   }
//   a4();
  
//   function a5() {
//     function PerfectNumber(a) {
//       let summ = 0;
//       for (let i = 1; i < a; i++) {
//         if (a % i == 0) {
//           summ += i;
//         }
//       }
//       if (summ == a) {
//         return "ДА! Это совершенное число!";
//       }
//       return "НЕТ! Это не совершенное число!";
//     }
  
//     let x = Math.trunc(+prompt("Введите число: "));
//     alert(PerfectNumber(x));
//   }
// a5();
  
  
//   function a6() {
//     function PerfectNumber(a) {
//       let summ = 0;
//       a = Math.abs(a);
//       for (let i = 1; i < a; i++) {
//         if (a % i == 0) {
//           summ += i;
//         }
//       }
//       if (summ == a) {
//         return 1;
//       }
//       return 0;
//     }
  
//     let x = 0;
//     let y = 0;
//     let result = "";
//     let perfectNumber = 0;
  
//     do {
//       x = Math.trunc(+prompt("Введите первое число диапазона: "));
//       y = Math.trunc(+prompt("Введите конечное число диапазона: "));
//     } while (x != +x || y != +y);
  
//     for (let j = x; j <= y; j++) {
//       perfectNumber = PerfectNumber(j);
//       if (perfectNumber == 1) {
//         result += j + ", ";
//       }
//     }
//     if (result == "") {
//       alert("В данном диапазоне совершенных чисел нет");
//     } else {
//       alert(result);
//     }
//   }
// a6();

//   function a7() {
//     function Time(a, b = 0, c = 0) {
//       if (a < 10) {
//         a = "0" + a;
//       }
//       if (b < 10) {
//         b = "0" + b;
//       }
//       if (c < 10) {
//         c = "0" + c;
//       }
//       return `${a}:${b}:${c}`;
//     }

//     let x = 0;
//     let y = 0;
//     let z = 0;
  
//     do {
//       x = Math.abs(Math.trunc(+prompt("Введите часы от 0 до 23: ")));
//       y = Math.abs(Math.trunc(+prompt("Введите минуты от 0 до 59: ")));
//       z = Math.abs(Math.trunc(+prompt("Введите секунды от 0 до 59: ")));
//     } while (x > 23 || y > 59 || z > 59);
  
//     alert("Текущее время: " + Time(x, y, z));
//   }
// a7();
  

//   function a8() {
//     function TimeToSeconds(a, b = 0, c = 0) {
//       let timeToSeconds = a * 3600 + b * 60 + c;
//       return timeToSeconds;
//     }
  
//     let x = 0;
//     let y = 0;
//     let z = 0;
  
//     do {
//       x = Math.abs(Math.trunc(+prompt("Введите часы от 0 до 23: ")));
//       y = Math.abs(Math.trunc(+prompt("Введите минуты от 0 до 59: ")));
//       z = Math.abs(Math.trunc(+prompt("Введите секунды от 0 до 59: ")));
//     } while (x > 23 || y > 59 || z > 59);
  
//     alert(
//       "От начала суток это составляет " + TimeToSeconds(x, y, z) + " секунд."
//     );
//   }
  
// a8();

//   function a9() {
//     function SecondsToTime(a) {
//       let hours = Math.trunc(a / 3600);
//       let minutes = Math.trunc((a - hours * 3600) / 60);
//       let seconds = Math.trunc(a - hours * 3600 - minutes * 60);
  
//       if (hours < 10) {
//         hours = "0" + hours;
//       }
//       if (minutes < 10) {
//         minutes = "0" + minutes;
//       }
//       if (seconds < 10) {
//         seconds = "0" + seconds;
//       }
//       let current_time = `${hours}:${minutes}:${seconds}`;
//       return current_time;
//     }
  
//     let input_seconds = 0;
//     do {
//       input_seconds = Math.abs(
//         Math.trunc(+prompt("Введите секунды для перевода их в текущее время: "))
//       );
//     } while (input_seconds != +input_seconds);
  
//     alert(SecondsToTime(input_seconds));
//   }
//   a9();
  
// Создать объект, описывающий автомобиль (производитель,
//     модель, год выпуска, средняя скорость), и следующие функции
//     для работы с этим объектом.
//     1. Функция для вывода на экран информации об автомобиле.
//     2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
//     Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час

// const automobil = [{
//     gorod:'USA' ,
//     model:'dodge',
//     god:'2019',
//     speed:'290'

// }]

// function showAutomobil(arr:any[]){
//     console.log(arr)


// function showTravelTime() {

//     var length = prompt("Введите расстояние (км)", "");

//     var time = computeTravelTime(length)

//     console.log("Средняя скорость: " + automobil.speed + " км/ч\n"
//         + "Расстояние: " + length + " км\n"
//         + "Время для преодоления: " + time + " ч");
// }

// function computeTravelTime(length) {
//     var t = Math.round(
//         (length / car.averageSpeed) * 100
//         ) / 100;

//     // находим остаток
//     var ost = t % 1;
//     // преобразовуем в минуты
//     ost = ost * 0.6;
//     // время (остаток в минутах)
//     t = Math.floor(t) + ost;

//     // учитываем перерыв на 1 час (каждые 4 часа дороги).
//     var breakTime = Math.floor(t / 4);
//     return (t + breakTime).toFixed(2);
// }

// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// const time = [{
//     hh : 20,
//     mm : 30,
//     ss : 45
// }];


// function showTime() {
//     console.log( ( '0' + time.hh).slice(-2) 
//         + ":"
//         + ('0' + time.mm).slice(-2)
//         + ":" 
//         + ('0' + time.ss).slice(-2)
//         );
// }

// function setSecond(second) {

//     // Проверяем нужно ли менять минуты.
//     if (time.ss + second > 59) {
//         // узнать сколько минут
//         let mm = Math.floor(second / 60);

//         // и сколько секунд оставить
//         if (mm == 0) {
//             setMinute(1);
//             second = (time.ss + second) - 60;
//             time.ss = 0;
//         }
//         else{
//             setMinute(mm);
//             second = (time.ss + second) - (mm * 60);
//             time.ss = 0;
//         }
//     }

//     // Меняем секунды.
//     time.ss += second;
// }

// function setMinute(minute) {

//     // Проверяем нужно ли менять часы.
//     if (time.mm + minute > 59) {
//         // узнать сколько часов
//         var hh = Math.floor(minute / 60);

//         // и сколько минут оставить
//         if (hh == 0) {
//             setHour(1);
//             minute = (time.mm + minute) - 60;
//             time.mm = 0;
//         }
//         else{
//             setHour(hh);
//             minute = (time.mm + minute) - (hh * 60);
//             time.mm = 0;
//         }
//     }

//     time.mm += minute;
// }

// function setHour(hour) {
//     // Проверяем нужно ли менять счетчик часов.
//     if (time.hh + hour > 23) {
//         // узнать сколько дней (дни не выводим и не меняем).
//         var dd = Math.floor(hour / 24);

//         // и сколько минут оставить
//         if (dd == 0) {
//             hour = (time.hh + hour) - 24;
//             time.hh = 0;
//         }
//         else{
//             hour = (time.hh + hour) - (dd * 24);
//             time.hh = 0;
//         }
//     }

//     time.hh += hour;
// }



// function changeSeconds() {
//     var ss = prompt("Введите кол-во секунд для изменения времени", "");

//     setSecond(+ss);

//     showTime();
// }

// function changeMinutes() {
//     var mm = prompt("Введите кол-во минут для изменения времени", "");

//     setMinute(+mm);

//     showTime();
// }

// function changeHours() {
//     var hh = prompt("Введите кол-во часов для изменения времени", "");

//     setHour(+hh);

//     showTime();
  
// Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».
// let a = +prompt("напиши свое имя")
// alert(a)
//Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. 

// let b = (prompt("какой год рождения?")as string)
// console.log(2023-b)
//. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 
// let a = +prompt("введите сторону квадрата")
// alert(a *4)
// Запросите у пользователя радиус окружности и выведите
// площадь такой окружности.
// let r = prompt("введите радиус окружности")
// alert(3,14*r**2)
// Запросите у пользователя расстояние в км между двумя
// городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы
// успеть вовремя.
// let r = +prompt("введите расстояяние между двумя городами")
// let e = +prompt("введите время")
// alert(r/e)
// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в
// константе.
// const euro = Number(prompt('Введите текущий курс доллара по отношению к евро: ')); 
// var dollar = Number(prompt('Введите количество долларов для обмена: '));
// alert("По текущему курсу при обмене вы получите " + dollar * euro + " евро");
// // Задача 10: Запросите у пользователя целое число и выведите ответ, четное число или нет. В задании
// // используйте логические операторы. В задании не надо использовать if или swich.

// alert(`Задача 10: Запросите у пользователя целое число и выведите ответ, четное число или нет. В задании
// используйте логические операторы. В задании не надо использовать if или swich.`);
// var a = prompt('Введите число для проверки на четность: ');
// a = Number(a);
// alert((parseInt(a) % 2 == 0) ? "ЧЁТНОЕ" : "НЕЧЁТНОЕ");

// // // Задача 9: Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения
// // // задачи вам понадобится оператор % (остаток от деления).

// alert(
//   "Задача 9: Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления)"
// );
// nmb = prompt('Введите трехзначное число: ');
// var a = Number(nmb % 10);
// var b = Number((nmb - a) / 10 % 10);
// var c = Number((nmb - a - b * 10) / 100);
// alert('Перевертыш: ' + (a * 100 + b * 10 + c));

// // // Задача 8: Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько
// // // шоколадок может купить пользователь и сколько сдачи у него останется.

// alert(`Задача 8: Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь и сколько сдачи у него останется.`);
// var sum = prompt("Cколько у вас в бумажнике денег? ");
// var price = prompt("И почем одна шоколадка? ");
// sum = Number(sum);
// price = Number(price);
// var sell = Math.trunc(sum / price);
// var change = sum - price * sell;
// if (sell < 1) {
//   alert('Сегодня вы на нуле. приходите в другой раз');
// }
// else {
//   alert('Получите свои ' + sell + ' шоколадки, а также сдачу ' + (sum - price * sell) + ' рублей ');
// }

// // Задача 7: Пользователь указывает объем флешки в Гб. Программа должна посчитать,
// //сколько файлов размеров в 820 Мб помещается на флешку.

// alert('Задача 7: Пользователь указывает объем флешки в Гб.Программа должна посчитать, сколько файлов размеров в 820 Мб помещается на флешку.');
// const GB_MB = 1024;
// var flash_drive = Number(prompt('Каков объем вашей флешки в Гб? '));
// var size = Math.trunc(flash_drive * 1000 / GB_MB);
// if (size < 0) {
//   alert('Ваша флешка перезаполнена, освободите пространство');
// }
// else {
//   alert('На флешку поместится ' + size + ' файлов объемом 820 Мб');
// Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.
        // let num1 = +prompt("1 число ");
        // let num2 = +prompt("2 число ");

        // let a = 0;

        // for (let i = num1; i <= num2; i++)
        // {
        //     a += i;
        // }

        // console.log(a);
// Запросить 2 числа и найти только наибольший общий делитель
// let a = +prompt("1 число ");
        // let b = prompt("2 число ");

        // let temp1 = a;
        // let temp2 = b;
        // let temp;

        // if (temp1 > temp2) 
        // {
        //     while (true) 
        //     {
        //         temp = temp1 % temp2;

        //         if (temp == 0) 
        //         {
        //             console.log(temp2);
        //             break;
        //         }
        //         else
        //         {
        //             temp1 = temp2;
        //             temp2 = temp;
        //         }
        //     }
        // }
        // else 
        // {
        //     while (true) 
        //     {
        //         temp = temp2 % temp1;

        //         if (temp == 0) 
        //         {
        //             console.log(temp1);
        //             break;
        //         }
        //         else
        //         {
        //             temp2 = temp1;
        //             temp1 = temp;
        //         }
        //     }
        // }
       //3. Запросить у пользователя число и вывести все делители этого числа. 

        // let num = +prompt("Enter the number: ");

        // let result = '';

        // for (let i = 1; i <= num; i++)
        // {
        //     if ((num % i) == 0)
        //     {
        //         result += i;
        //         result += ' ';
        //     }
        // }

        // console.log(result);

   

       //4. Определить количество цифр в введенном числе.

        // let num = +prompt("Enter the number: ");

        // let result = 0;

        // while(num > 0)
        // {
        //     result += 1;

        //     num /= 10;
        //     num = Number.parseInt(num);
        // }

        // console.log(result);


      //5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. чтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

        // let positiveNum = 0;
        // let negativeNum = 0;
        // let zeroNumber = 0;
        // let oddNum = 0;
        // let evenNum = 0;
        // let result = '';
        // let num = 0;

        // for (let i = 1; i <= 10; i++)
        // {
        //     num = +prompt(`Enter the ${i} number: `);

        //     if (num > 0) { positiveNum++; }
        //     else
        //     if (num < 0) { negativeNum++; }
        //     else
        //     if (num == 0) { zeroNumber++; }

        //     if (num % 2 == 0) { oddNum++; }
        //     else
        //     { evenNum++; }

        //     result += num.toString() + ' ';
        // }    

        // console.log(`Positive number count: ${positiveNum} \nNegative number count: ${negativeNum} \nZero number count: ${zeroNumber} \nEven number count: ${evenNum} \nOdd number count: ${oddNum}`);
        // console.log(`Results: ${result}`);


      //6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.//

        // let num1 = 0;
        // let num2 = 0;
        // let oper = 0;
        // let result = 0;

        // while(true)
        // {
        //     num1 = +prompt("Enter the first number: ");
        //     num2 = +prompt("Enter the second number: ");
        //     oper = prompt("Enter the operation: ");

        //     switch(oper)
        //     {
        //         case '+':
        //             result = num1 + num2;
        //             break;
        //         case '-':
        //             result = num1 - num2;
        //             break;
        //         case '*':
        //             result = num1 * num2;
        //             break;
        //         case '/':
        //             result = num1 / num2;
        //             break;
        //     }

        //     if (!confirm(`${num1} ${oper} ${num2} = ${result}\nDo u want to solve another example?`))
        //     {
        //         break;
        //     }
        // }


       //7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

        // let num = 0;
        // let count = 0;
        // let dir = '';
        // let temp = 0;
        // let numCount = 0;
        // let numTemp = 0;

        // while (true) 
        // {
        //     num = +prompt("Enter the numer:");
        //     count = +prompt("Enter the count of shift:");
        //     dir = prompt("Enter the direction ( < | > ):");
            
        //     numTemp = num;

        //     while(numTemp > 0)
        //     {
        //         numCount += 1;
        //         numTemp /= 10;
        //         numTemp = Number.parseInt(numTemp);
        //     }

        //     numTemp = num;

        //     for (let i = 0; i < count; i++) 
        //     {
        //         if (dir == '>')
        //         {
        //             temp = num % 10;
        //             num = Number.parseInt(num / 10);
        //             num = (temp * Math.pow(10, numCount - 1)) + num;
        //         }
        //         else
        //         {
        //             temp = Number.parseInt(num / Math.pow(10, numCount - 1));
        //             num %= Math.pow(10, numCount - 1);
        //             num = (num * 10) + temp;
        //         }
        //     }

        //     if (!confirm(`Your number is ${numTemp}, u want to shift by ${count} numeric, by ${dir} direction \n Result: ${num} \n Continue?`))
        //     {
        //         break;
        //     }

        //     num = 0;
        //     count = 0;
        //     dir = '';
        //     temp = 0;
        //     numCount = 0;
        //     numTemp = 0;
        // }
// Запросите у пользователя число, возведите это число во
//2-ю степень и выведите на экран.
// let a= +prompt("введите число")
// alert(a**2)
//Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел
// let a =+prompt("1num")
// let b = +prompt("2num")
// alert((a+b)/2)
//Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата
// let a = +prompt("введите сторону квадрата")
// alert(a*4)
// Реализуйте конвертор из километров в мили (пользователь
//     вводит километры, программа выводит мили). 1 км = 0,621371
//     миль. Это значение укажите в коде как константу
// const mili = Number(0,621371); 
// var km = Number(prompt('Введите km: '));
// alert("итого - " + km * mili + " миль");
// 5. Реализуйте калькулятор. Пользователь вводит два числа,
// а программа выводит результаты действий + - * / между
// этими числами.
// let a = +prompt("1num")
// let b = +prompt("2num")
// let c = +prompt("введите знак")
// if (c = "+"){
//     alert(a+b)
// }
// else if (c = "/"){
//     alert(a/b)
// }
// else if (c = "*"){
//     alert(a*b)
// }
// else if (c = "-"){
//     alert(a-b)
// }
// Пользователь вводит значения a и b для формулы a * x + b = 0,
// а программа считает и выводит значение x.
// let a = +prompt("1num")
// let b = +prompt("2num")
// alert(-b/a)
// Запросите у пользователя текущее время (часы и минуты)
// и выведите, сколько часов и минут осталось до следующего
// дня.
// let a = +prompt("h")
// let b = +prompt("m")
// if (h>0 && h<24 && m>0 && m<60){
//     alert(24-h && 60 - m)
// }
// 1
// Написать функцию, которая принимает 2 числа и возвра-
// щает меньшее из них.
// function prinemaetDvachisla(){
//   let a = +(prompt("1 num"));
//   let b = +(prompt("2 num"));
//   if(a>b){
//     console.log(b)
//   }
//   else if (a<b){
//     console.log(a)
//   }
// }
// prinemaetDvachisla()

// Написать функцию, которая возводит переданное число
// в указанную степень.
// function exponent(){
//   let a = +(prompt("число которое возвести в степени"));
//   let b = +(prompt("степень"));
//   console.log(a**b)
// }
// exponent()
// Написать функцию, которая принимает 2 числа и знак
// (+ - * /), считает пример и возвращает результат.
// function calculator(){
//   let a = +(prompt("1 num"))
//   let b = +(prompt("2 num"))
//   let c = prompt("znak")
//   if (c=='+') return a+b
//   if (c=='-') return a-b
//   if (c=='*') return a*b


// }
// console.log(calculator())
// Написать функцию, которая проверяет, является ли пере-
// данное ей число простым.
// function prostoechislo(){
//   let a = +(prompt('enter number'));
//   if (a/a && a/1){
//     console.log("простое")
//   }
//   else{
//     console.log("не простое")
//   }
// }
// console.log(prostoechislo())
// 5
// Написать функцию, которая принимает число и выводит
// таблицу умножения для этого числа. Вызовите функцию
// для всех чисел от 2 до 9
// function tablicaumnojenia(){
//   let a = +(prompt("введите число из таблицы умножения"))
// for (let i =2 ; i <=9; i++){
// let result = i* a;
// console.log(`${a}` * ${i} = *{result})
//   }
// }
// tablicaumnojenia()
// Написать функцию, которая реализует работу оператора %.
// Функция принимает 2 параметра и возвращает остаток от
// деления первого параметра на второй. В функции исполь-
// зовать только + - * /, оператор % не использовать.
// function ostatokotdelenia(a,b){
//   let mnoz = 1
//   let acum =a -b
//   while(acum>b){
//     acum -= b
//     mnoz++
//   }
// return a - b*mnoz
// }
// console.log(ostatokotdelenia(11,2))
// console.log(ostatokotdelenia(11,3))
// console.log(ostatokotdelenia(11,4))
// Написать функцию, которая принимает от 1 до 5 чисел и
// возвращает их сумму.
// function summa(a,b=0,c=0,d=0,e=0){
//   return a+b+c+d+e}
//   console.log(summa(9))
//   console.log(summa(1,2))
//   console.log(summa(9,5,8))
//   console.log(summa(9,6,7,3))
//   console.log(summa(9,3,4,2,3))

// function sumTo(n:number):number{
//   return n==0? n : n =sumTo( n -1)
// }
// console.log(sumTo(100))


// Создать массив из 10 случайных чисел и написать несколько
// функций для работы с ним.
// 1
// Функция принимает массив и выводит его на экран.
// 2
// Функция принимает массив и выводит только четные
// элементы.
// 3
// Функция принимает массив и возвращает сумму всех
// элементов массива.
// 4
// Функция принимает массив и возвращает его максималь-
// ный элемент.
// 5
// Функция добавления нового элемента в массив по ука-
// занному индексу.
// 6
// Функция удаления элемента из массива по указанному
// индексу.
// 1
// Функция принимает массив и выводит его на экран. 
// const arr = [1,2,3,54,5,6,67,7,8,9]
// function addarr (arr:any[]){
//   console.log(arr)
// }
// addarr(arr)
// 2
// Функция принимает массив и выводит только четные
// элементы.
// let arr = [2,3,6,7,8,87,7,89,5,54];

// function even(a) {
//   let ar = [];
  
//   for (let i = 0; i < a.length; i+=2) {
//     ar.push(a[i]);
//   }

//   return ar;
// }

// console.log(even(arr));



// 3
// Функция принимает массив и возвращает сумму всех
// элементов массива.
// let arr = [1, 2, 3, 4, 5,6,7,8,9,10];

// let result = arr.reduce((sum, current) => sum + current, 0);

// alert(result); 



        
// Функция принимает массив и возвращает его максималь-
// ный элемент.
// const arr =[1,2,3,4,5,56,65,7,7,78]
// let maxElement = Math.max.apply(null,arr);
// console.log(maxElement)
// Создать еще один массив из 5 случайных чисел и написать
// следующие функции.
// 1      
// Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из двух массивов
// без повторений.
// let a = [1,32,5,6,3]
// let b = [1,2,3,4,5]
// let elements = a.filter((element) => b.includes(element))
// console.log(elements)
// Реализовать класс, описывающий окружность. В классе долж-
// ны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// class circle{
//   constructor(r) {
//     this.r = r;
//   }
//   get radius() {
//     return this.r;
//   }

class HtmlElement{
  tag:string
  single:boolean
  text:string
  attrs:string[] =[]
  styles:string[] = []
  elements:HtmlElement[] = []
  constructor(tag:string,single:boolean,text:string){
    this.tag = tag
    this.single = single
    this.text = text
  }
  setAttr(attr:string){
    this.attrs.push(attr)
  }
  setStyle(style:string){
    this.styles.push(style)
  }
  appendElement(element:HtmlElement){
    this.elements.push(element)
  }
  prependElement(element:HtmlElement){
    this.elements.unshift(element)
  }

  getHtml(){
    if (this.single){
      return `<${this.tag} ${this.attrs.join(' ')} value="${this.text}" >`
    }else{
      const begin = `<${this.tag} ${this.attrs.join(' ')}>${this.text}`
      const end = `</${this.tag}>`
      return begin +this.elements.map(el=>el.getHtml()).join('')+ end
    }
  }
}

const pElement = new HtmlElement('p',false,'sfdsfsdfsd')
const imgElement = new HtmlElement('img',true,'')
imgElement.setAttr('id="img"')
imgElement.setStyle('color:red')
imgElement.setStyle('padding:10px')
imgElement.setAttr(`style="${imgElement.styles.join(';')}"`)
console.log(imgElement.getHtml())
pElement.appendElement(imgElement)
console.log(pElement.getHtml())









