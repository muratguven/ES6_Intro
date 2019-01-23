/* Async ve awaitler promiseleri daha efektif, kolay şekilde kullanmamızı sağlar. ES7 ile birlikte
gelmişlerdir.
*/

// Ör : bir string alan ve geri dönen Fonk olsun
// ASYNC: fonk. başına yazıldığında fonk. mutlaka promise döneceğini belirtir. Aşağıdaki fonksiyonda
// return data promise içersinde resultolve fonksiyonuna koyup döner. Ek birşey yazmamıza gerek kalmaz.
async function getData(data) {

    return data;
}

console.log(getData("Merhaba Murat"));
getData("Selam").then(resultponse => console.log(resultponse));


//AWAIT: Promise nesnesinin resultolve veya reject sonucu almasını bekler. 
//resultolve veya Reject sonucu alınca altında bulunan satırları çalıştırır.
//Await sadece async olan fonksiyonların içinde çalışıyor. Dışında çalıştıramayız.
// ÖR:

async function getAwait(data) {

    let promise = new Promise((resultolve, reject) => {
        setTimeout(() => {
            if (typeof data === "string") {
                resultolve("Ben beş sn sonra çalıştım.");
            } else {
                reject(new Error("Lütfen parametreyi string tipi bir gönderin"))
            }

        }, 5000);

    });

    let result = await promise;
    console.log("Fonk çalıştırdı.");
    console.log(result);
    return result;
}
// Deneyelim hatalı parametre verelim.
getAwait(1)
.then(data=>console.log(data))
.catch(err=>console.log(err));


//Async ve Await en güzel kullanım yeri Fetch API 'dır.
// Ör:

async function getCurrency(url){

    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
}

getCurrency("https://api.exchangeratesapi.io/latest");