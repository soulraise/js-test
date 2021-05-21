//1
// let age = +prompt('сколько тебе лет?')
// let people = (age < 0) ? 'укажите положительно значение' :
// 	(age >= 0 && age < 12) ? 'ребенком' :
// 		(age >= 12 && age < 19) ? 'подростком' :
// 			(age >= 19 && age < 60) ? ' взрослый' : 'пенсионер';
// console.log(people)

//2
// let number = +prompt('укажите число от 0 до 9')
// let sumbol = (number === 1) ? "!" :
// 	(number === 2) ? "@" :
// 		(number === 3) ? "#" :
// 			(number === 4) ? "$" :
// 				(number === 5) ? "%" :
// 					(number === 6) ? "^" :
// 						(number === 7) ? "&" :
// 							(number === 8) ? "*" :
// 								(number === 9) ? "(" :
// 									(number === 0) ? ")" : 'укажите число от 0 до 9';
// console.log(sumbol)

//3
// let number = +prompt('укажи трехзначное число', 324)
// let number1 = (number - number % 100)/100
// let number2 = Math.round((number % 100) /10)
// let number3 = number % 10
// let res = (number1 === number2 || number2 === number3 || number1 === number3)? 'есть повторы': 'повторов нет';
// console.log(res)

//4
// let age = +prompt('укажи год', 1772)
// let a = age % 400
// let b = age % 4
// let c = age % 100
// let ageH = ((a === 0 || b === 0) && c !== 0) ? "Высокосный" : "Не высокосный"
// console.log(ageH)

//5
// let number = prompt('укажите пятизначное число', 12321)
// let numberRev = number.split('').reverse().join('');
// (number === numberRev)?console.log('число является палиндромом'):console.log('число не является палиндромом');

//6
// let number = +prompt('укажите сумму', 100)
// let currency = prompt('укажите валюту', 'EUR').toUpperCase()
// let res = (currency === 'EUR')?Math.round(number*1.1):
//           (currency === 'UAN')?Math.round(number*27):
//           (currency === 'AZN')?Math.round(number*2): 'не верная валюта';
// console.log(`${res} ${currency}`)

//7
// let number = +prompt('сумма покупки', 100)
// let res = (number>0 && number<200)?number:
// (number>=200 && number<300)?number*0.97:
// (number>=300 && number<500)?number*0.95:
// (number>=500 )?number*0.93:'';
// console.log(`сума к оплате ${res}`)

//9
// let quest1 = +prompt('сколько лап у кошки ?', 4)
// let quest2 = +prompt('сколько дней в 2020 году', 366)
// let quest3 = +prompt('сколько чудес света?', 7)
// let res = 0
// res = (quest1 === 4)? res = ++res: res;
// res = (quest2 === 366)?  res = ++res: res;
// res = (quest3 === 7)?   res = ++res: res;
// console.log(`вы ответали на ${res} вопросa и заработали ${res} балa`)

//10
// let questD = +prompt('какой день?', 4)
// let questM = +prompt('какой месяц ?', 1)
// let questY = +prompt('какой год?', 1772)
// let res;
// let a = questY%400
// let b = questY%4
// let c = questY%100
// let ageH = ((a === 0 || b === 0) && c !== 0)? true : false;
// let nextD = (questD >=1 && questD<=27)? questD + 1:
// (questD >= 28 && questM !== 2 && questD<30)? questD + 1:
// (questD === 28 && questM === 2 && ageH)? questD + 1:
// (questD === 28 && questM === 2 && ageH===false)? 1:
// (questD === 30 && questM === 4 && questM !==2)? 1:
// (questD === 30 && questM === 6 && questM !==2)? 1:
// (questD === 30 && questM === 9 && questM !==2)? 1:
// (questD === 30 && questM === 11 && questM !==2)? 1:
// (questD === 30 )? questD+1:1;
// console.log(nextD)
// let nextM = (questD<=27)?questM:
// (questD===28 && ageH===false && questM===2)?questM+1:
// (questD===28 && ageH && questM===2)?questM:
// (questD>=28 && questD<=29 && questM!==2)?questM:
// (questD === 30 && questM === 4 && questM !==2)? questM + 1:
// (questD === 30 && questM === 6 && questM !==2)? questM + 1:
// (questD === 30 && questM === 9 && questM !==2)? questM + 1:
// (questD === 30 && questM === 11 && questM !==2)? questM + 1:
// (questD === 31 && questM !== 12)? questM + 1: 1;
// let nextY = (questD===31 && questM ===12)?questY+1:questY;
// console.log(`следующая дата: ${nextD} число ${nextM} месяц ${nextY} год`)