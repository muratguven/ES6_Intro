// Map 'ler Key (Anahtar) ve Value (Değer) den oluşur. Her key bir değere eşittir.
// Map'lerde Key olarak primitive veya reference değerler kullanabiliyoruz.

// Map oluşturma
let myMap = new Map();

// Map için örnek Key'lerimizi oluşturuyoruz.

const key1 = "Murat";
const key2 = {a:10,b:20};
const key3 = ()=>2;

myMap.set(key1,"İsim Değeri");
myMap.set(key2,"Object key değeri");
myMap.set(key3, "Fonk. Değeri");

console.log(myMap);