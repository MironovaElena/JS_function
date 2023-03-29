//1. Какие есть способы объявления функций?
//2. Приведите примеры вызова одной и той же функции всеми известными вам способами.

//function hello (){ //FUNCTION DECLARATION
    //FUNCTION -BODY-LOGIC/CODE
//    alert('Hello!');
//}
//hello(); //вызываем функцию

//функция -возраст prompt();

//function question(){ //Function Expression
//    let age = prompt('How old are you?');
//    answer(age); //аргумент
//}

//function answer(age){ //параметр
//    alert('You are ' + age + 'years old.');
//}

//question();


//const sum = (a, b) => a + b; //arrow functions

/* Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};
*/

//console.log( sum(1, 2) ); // 3

//В чём разница между тестированием и отладкой (дебагином?) А что такое логирование?

//Отладка это процес поиска исправление ошибок в скрипте по английски дебагин.
//Tестирование - проверка работы и выявление ошибок. 
//Oтладка - исправление выявленных ошибок.

//Логирование- если нужно что-то вывести в консоль из кода, применяется функция `console.log`.

//5. Что делает функция `console.log()`? -используется для вывода сообщений на консоль веб-браузеров.
// Обычно он используется при проверке того, работает ли функция на стороне Javascript.

//В чём разница между Function Expression и Function Declaration? 

//Если функция объявлена как отдельная инструкция в основном потоке кода, то это “Function Declaration”.
//Если функция была создана как часть выражения, то это “Function Expression”.
//Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
//Функции, объявленные при помощи Function Expression, создаются только когда поток выполнения достигает их.

//Что такое глобальная зона видимости функций? -Глобальная область видимости является самой внешней областью. 
//Она доступна для любой внутренней или локальной области видимости. 
//В браузере глобальной является область видимости, создаваемая при загрузке JavaScript-файла, указанного в атрибуте src тега script:

//Что вернёт код?
//function showX(x)
//{ 
//	return x;
//}
//console.log(showX(28));//вернет 28

//Что выведет этот код?

//function sum(x, y=0) {
//    return x+y;
//  } 
//  console.log(sum(5));//выведет 5

//Что выведет код?

//console.log(foo); // это лишнее, без этого выведет дальше консольлог Cat

//let foo = "Cat";

//console.log(foo); //выведет ошибку, зачем дважды косоль лог (foo)


// function myMessage(){
//     console.log('Я учу Java Script!');
// }
//     myMessage()


const blockFoto = document.getElementById("img");
const bigImg = document.getElementById("big-img");

const leftShowFoto = () => {
    blockFoto.style.backgroundImage = `url("https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60")`;


bigImg.setAttribute(
    src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
);
bigImg.src= "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60";

console.log(blockFoto);
};
function rightShowFoto() {}
