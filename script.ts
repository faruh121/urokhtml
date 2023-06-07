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
  
  


  




  

  

