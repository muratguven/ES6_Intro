// Arrow Function ES6 ile gelen ve fonksiyon tanımlamalarını kısaltmaya yarayan bir özelliktir.
//Ör : Eski kullanım

const square = function(x){
    return x*x;
}
console.log('Eski fonk. tanımlama:'+square(4));

// Arrow function ile kullanım şekilleri 
const oneSquare = (x)=>{
    return x*x;
}
console.log('Arrow Func. Örnek:'+oneSquare(3));

// Eğer fonksiyon tek bir parametre alıyorsa parantez kullanmamıza gerek yok, AYRICA:
// fonk yukarıdaki gibi tek bir işlem yapıyorsa süslü parantez kullanımına da gerek yoktur.
// Hatta tek işlem return ise return yazmaya da gerek yok :))

const easySquare = x=>x*x;
console.log('Arrow Func. Kolay Kullanım:'+easySquare(5));

// Diğer kullanım biçimleri iki parametre

const helloArrow = (firstName,lastName)=>console.log(`Merhaba Arrow ${firstName} ${lastName}`);
helloArrow("Murat","Güven");
