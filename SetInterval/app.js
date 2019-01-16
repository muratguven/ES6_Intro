

// setInterval methodu ayni setTimeOut methodu gibi tanımlanır. Fakat setInterval verilen sürede tekrar eder.

const result = document.getElementById("result");
// 1000 ms de bir fonksiyonu çalıştırır.
let intervalTest= setInterval(function(){
    result.innerHTML += `<aside>Interval Çalıştı.</aside>`;
},1000);

// butona Tıklandığında 
document.getElementById("btn").addEventListener("click",function(){
// Durdurmak için de clearInterval kullanılır.
clearInterval(intervalTest);
});
