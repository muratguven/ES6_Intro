// Document nesnesinin incelenmesi
let value = document;
let value2 = document.all; // document.all HtmlCollection dır. Sayfamızda bulunan tüm html elementlerini getirir.

// document.all forEach ile Arraya çevirmeden kullanamayız. Fakat For döngüsünde kullanılabilir.
// forEach ile kullanmak için ;
const elements = document.all;
const elementArray = Array.from(elements);

elementArray.forEach(function(element){
    // console.log(element);
});

// console.log(value);
// console.log(value2);


/*v
ELEMENT SEÇME
*/
// Element Id ye Göre Seçme

let elementForm = document.getElementById("todo-form");
// console.log(elementForm);

// Element Class a göre seçme

let elementListClass = document.getElementsByClassName("list-group-item");
// console.log(elementListClass);

//Element Tag'e göre seçme

let elementTag = document.getElementsByTagName("div");
// console.log(elementTag);

/* 
QUERY SELECTOR: query selector css-selectorler gibi kullanılır. Elementleri farklı farklı fonksiyonlar 
kullanarak seçmek yerine tek bu fonsiyonla seçebiliyoruz. Yalnız class seçme gibi tüm belirttiğimiz class a 
sahip elemenleri seçmek yerine ilk elementi verir. Yani bu fonksiyonla tek bir element seçebiliyoruz. :(
*/
//Select by Id
let querySelectorElement = document.querySelector("#todo-form");
// console.log(querySelectorElement);
// Select By Class Name
let qsByClassName = document.querySelector(".list-group-item");
// console.log(qsByClassName);
//Select By tag name 
let qsTagName = document.querySelector("div");
// console.log(qsTagName);

/*
QUERY SELECTOR ALL: Bu fonksiyon ile tüm elemenleri seçebiliriz. Bir element array döner. Böylece forEach
ile kullanabiliriz
*/

let qsAllElement = document.querySelectorAll("div");
// console.log(qsAllElement);

/*
ELEMENT STYLE DEĞİŞTİRME
*/

let htmlElement = document.querySelector("#clear-todos");
// console.log(htmlElement.style);
htmlElement.className = "btn btn-info";


/* DİNAMİK ELEMENT EKLEME */
const newLink = document.createElement("a");

const cardBody = document.getElementsByClassName("card-body")[1];
newLink.className = "btn btn-xs btn-success";
newLink.id = "btn-newlink"
newLink.href ="http://www.google.com";
newLink.target = "_blank";
newLink.appendChild(document.createTextNode("Google"));


cardBody.appendChild(newLink);

/* DİNAMİK ELEMENT SİLME */

const todoList = document.querySelector(".list-group");
const todo = document.querySelectorAll(".list-group-item");

// todo[0].remove();

// removeChild methodu

// todoList.removeChild(todoList.lastElementChild);
// todoList.removeChild(todo[1]);