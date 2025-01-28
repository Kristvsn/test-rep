/**
 * 1. Создай такие переменные:
 * фамилия - Иванов, имя - Иван, возраст - 25, имеет ли автомобиль - нет, имеет
 * ли детей - да, список имен детей - Андрей, Петр, Екатерина.
 * P.S. Каждая переменная создается отдельно, т.е. их пока не связываем.
 */
// const surname='Ivanov';
// const kidsName=['a','b'];
/**
* 2. Создай условие, при котором у Ивана скидка на продукты увеличивается:
 *  Если детей больше двух, то discount равна 10.
 *  Дополнительно: За каждого следующего ребенка к discount добавляется 5.----разобрать
 */

// const kidsName = ['a', 'b', 'c', 'd'];
// if (kidsName.length == 2) { console.log(discount = 5); } else if (kidsName.length > 2) { console.log(discount = 10); }


// 3.*Проанализировать/

// const firstName = "Иван";
// const lastName = "Иванов";

// if (firstName.length==4) {
//   fullName = firstName + lastName;
// }

// if (typeof lastName === "boolean" && lastName === "Иванов") {
//   fullName = firstName + " " + lastName;
// }
// console.log(fullName);

// const person = {
//     name: "Ivan",
//     surname: "Ivanov",
//     age: 25,
//     kidsNames: ["Alina", "Alisa", "Andrew"],
//   };
  /** 1. Создай функцию, которая складывает имя и фамилию у объкета person и выводит в консоль. */

//   function nameN(){
//     const fullName=person.name+person.surname;
//     console.log(fullName);
//   }
//   nameN();
  
  /** 2. Создай функцию hasKids, которая выводит в консоль true или false, При условии, есть ли дети у person. */

//   function hasKids(){if(person.kidsNames=='Alina'){console.log ('true');}else{console.log('false');}}
//   hasKids();

  /** 3. Создай функцию, которая выводит в консоль последний элемент массива. */

//   function lastElemenet(){console.log(person.kidsNames[2]);}
//   lastElemenet();

  /** 4. В функцию squareFigure добавь параметр figure, который принимает объекты имеющие height, width (фигуры). 
   * Это нужно для того, чтобы функция могла работать с любыми объектами, а не только с одним "figure", как это реализовано сейчас. */

// const figure = { height: 20, width: 10 };
// const figure1 = { height: 25, width: 15 };

// function squareFigure(height, width) {
//   const square = height * width;
//   console.log(square);
// }
// squareFigure(figure.height, figure.width);

// function squareFigure(figure){const square=figure.height*figure.width;console.log(square);}
// squareFigure(figure);

/** 5. Есть функция getDiscount, которая выводит в консоль имя и размер скидки для человека. 
 * Проблема данной функции в том, что она работает только с одним объектом person. 
 * Добавь параметры для функции так, чтобы функция могла работать с любым объектом по типу person.
 Дополнительно: сделай так, что если детей нет, консоль об этом уведомляла.
 */
// const person = {
//   name: "Ivan",
//   surname: "Ivanov",
//   age: 25,
//   kidsNames: ['a','b'],
// };
 
// function getDiscount(person){const discount=0;console.log(person.name,discount);}
//  getDiscount(person);

// function notifChild (person) {if(person.kidsNames.length!==0){console.log(person.kidsNames.length)}
// else{console.log ('No children')}};
// notifChild (person);
const person = {
  name: "Ivan",
  surname: "Ivanov",
  age: 25,
  kidsNames: ['a'],
};

function getDiscount(person){const fullName=person.name+person.surname;let discount=0;
  if(person.kidsNames.length>2){discount=10;}else{discount=0;}
  if(person.kidsNames.length==0){console.log("no child");}
console.log(discount);
}
getDiscount(person)

