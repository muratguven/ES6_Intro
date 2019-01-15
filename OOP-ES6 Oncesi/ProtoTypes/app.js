/* Javascript OOP şekilde bir dil değildir. Yani class mantığı yoktur bunun yerine
JAVASCRIPT PROTOTYPE tabanlı bir dildir. ECMA SCRIPT 6 ile Class'lar yazımı gelmiştir ama bunlar arka tarafta
yine prototype'lara çevrilir.

Javascriptte tüm nesnelerin prototype özelliği bulunmaktadır.
*/

// En temel nesne Object nesnesidir. Örnek olarak oluşturulalım

let obj = new Object();
obj.name = "Murat";
console.log(obj);
// bu çalıştığında nesne name özelliği altında _proto_ diye bir özellik görüyoruz. Bu ProtoType özelliğidir.
// Bu root prototype nesnesidir. 

//Örneğin : Employee nesnesi oluşturulalım

function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = ()=>{
        // console.log("Employee Bilgileri Göster.");
        console.log(`Adı ${this.name} Yaş ${this.age}`);
    }
}
const emp = new Employee("Murat",34);
console.log(emp); // Bu çalıştığında employee için bir prototype ve içinde root bir prototype nesnesi göreceğiz.
console.log(emp.toString()); // Ör toString methodu root prototype 'ın bir methodudur.


//ProtoType faydaları: Örneğin aynı nesneden iki tane oluşturulalım
const emp1 = new Employee("Ebru",30);
const emp2 = new Employee("Nisan",1);

// ShowInfos methodu her nesne için bir tane kopyası oluşarak çalışacaktır. Bu da gereksiz yere bellek kullanımını arttırır.
// Bu iki nesne de aynı prototype'den türediği için bu methodu prototype içerisinde yazarsak,
// kopyalanma olayından kurtulabiliriz.
emp1.showInfos();
emp2.showInfos();

// Methodu ProtoType içerisinde tanımlama
// Örnek Person nesnesi oluşturalım.
function Person(name,lastname,email){
    this.name = name;
    this.lastname = lastname;
    this.email = email;
  // showPerson methodunu protoType içersinde tanımlayalım.
}
//BURADA PROTOTYPE ICERISINDE METHOD TANIMLIYORUZ.
Person.prototype.showPerson = function(){ // Burada Arrow Func çalışmıyor :)
    console.log(`Adı: ${this.name} SoyAdı: ${this.lastname} Mail: ${this.email}`);
}

// Şimdi nesneyi kullanıp methodu çağıralım.
const person1 = new Person("Murat","Güven","mu@mail.com");
console.log(person1);
person1.showPerson();



