//Spread Operatörü de array içersinde değerlerin kolay kullanımını sağlayan bir operator. 
// Array içersinde değerleri yan yana yazabilmesini sağlar
// Örnek Kullanımlar.
// (...)
const langs = ["Javascrip","C++","Java","C#"];
// console.log(langs[0],langs[1],langs[2],langs[3]);
//üstteki kullanım yerine 
console.log(...langs);

// Ör2: yeni diller eklemek istersek ( İki array birleştirmek)
const lang2 = ["Phyton","Go",...langs];
console.log(...lang2);

// EN ÇOK KULLANIM YERI
let addNumbers = (a,b,c)=>console.log('Toplam :'+(a+b+c));
const numbers = [100,200,300];
// burada tek tek girmemize gerek kalmıyor !
addNumbers(...numbers);
