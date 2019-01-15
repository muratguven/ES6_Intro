// Destruction : Array veya Objeler içerisinden değerleri almak için kullandığımız kısa bir yol.

// Ör1: Array içersinde kullanımı
let number1,number2;
const arr =[100,200,300,400,500];

// bu arrayda 0. ve 1. index değerlerini number1 ve number2 ye atamamız gerekirse;

[number1,number2]=arr;
console.log(number1,number2);


// Ör2: Nesne(Object) içersinde kullanımı
let numberObj = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};
// a ve d özelliklerini seçmek istiyoruz.
// Eğer a ve d özelliklerini belirlediğimiz bir değişken ismine atamak istersek : dan sonra ismini verebiliriz.
const {a:num1,d:num2}= numberObj;
// console.log(a,d);
console.log(num1,num2);

