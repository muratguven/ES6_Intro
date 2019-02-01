// COMMON JS MODULLLERI: ES6 ile bir fonksiyonun yada bir class'ın (objenin) export edilmesini sağlar.
// Bir fonk. export edilmesi için örnek;

// module.exports.test1 = function Test1(){
//     console.log('Bu export fonksiyon:Test1');
// }
//***module.export yönetimi ile bir dosyada sadece bir fonksiyonu export edebiliriz.  */ 
// Yani bu dosyayı Require ile çağırdığımızda en son tanımlanan Test2 fonksiyonu çağrılır.
//Çözüm exportlara bir name veriyoruz.
// module.exports.test2 = function Test2(){
//     console.log('Bu export fonksiyon:Test2');
// }


// Yukarıdaki kullanımı daha düzgün bir şekilde yazmak istersek 
// Obje olarak tanımlayıp kullanabiliriz.
// örneğin;

module.exports={
    name:"Murat",
    test1 :function(){
        console.log("Test1 Fonksiyonu kullanımı");
    },
    person:{
        name:"Murat Güven",
        mail:"muratguven@mail.com"
    }
}

