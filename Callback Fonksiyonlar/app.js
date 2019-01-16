/* Callback fonksiyonlar fonksiyonlara parametre olarak atanan fonksiyonlardır. Örneğin forEach
içersinde kullandığımız fonksiyon.
Callback fonk. biz asenkron işlemlerimizde kullanabiliyoruz.
*/

const langs = ["C#","Java","C++"];

// Bu fonksiyon 2sn sonra langs array'ine yeni bir lang ekler.
function addLang(lang, callback){
    setTimeout(function(){
        langs.push(lang);
        console.log(lang+" Eklendi");
        callback();
    },2000);
}
// bu fonksiyon tüm langs console ekranına yazar.
function getAllLangs(){
    setTimeout(function(){
        langs.forEach(element => {
            console.log(element);
        });
    },1000);
}

// setTimeout ile bu iki fonksiyon asenkron bir işleme dönüştü.
// Aşağıdaki gibi kullanırsak tüm Javascript olmadan tüm liste ekrana yazılır.
// addLang("Javascript");
// getAllLangs();

// Bunun için getAllLangs fonksiyonunu sonrasında çalışmasını isteğimiz fonksiyona parametre olarak gönderiririz
//Callback - Böylece işlemler senkron şekilde çalışırlar.

addLang("Javascript",getAllLangs);
