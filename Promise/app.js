// Promise yapısı ES6 ile gelen ve callback dezavantajlarını ortadan kaldıran yeni bir yapıdır.
// Aslında promise'ler birer objedir. Callback 'de hata yakalama ve içi içe birden fazla callback
//(callback-hell) de oluşacak olumsuzlukları ortadan kaldırırlar.

/*
Promise de 3 Durum vardır.
Biz kodumuz da bir rest api ye istek gönderdiğimiz de state: pending olacakır.
rest servis bize olumlu sonuç gönderdiğinde promise state:resolved 
olumsuz sonuç gönderdiğinde state: rejected olacaktır. 
Biz bunları kodumuzda olumlu durum için then fonk ile olumsuz kısım için ise catch 
fonk. ile kullanıyoruz
*/


// Promise dönen fonksiyon
// resolve dönen (olumlu)
function getData(data) {
    return new Promise(function (resolve,reject) {
        setTimeout(function(){
            
            resolve(data);
        },10000);
    });
}

// Promise dönen fonksiyon
// reject dönen (olumsuz)
function getRejectData(data) {
    return new Promise(function (resolve,reject) {
        setTimeout(function(){
            reject("Olumsuz Sonuç!");
        },10000);
    });
}

// Bu fonk kullandığımızda 10 sn den önce baktığımızda status Pending durumunu value undefined görürürz.
// 10 sn sonra Olumlu sonuç döner.
console.log(getData("Olumlu Sonuç"));
console.log(getRejectData("Hello Murat Güven"));


// THEN ve CATCH ile promise kullanımı
//Then
getData("then kullanımı").then(function(resolve){
    // Resolve durumunda 
    console.log(resolve);
});
//Catch
getRejectData("testt").catch(function(err){
    console.log(err);
});