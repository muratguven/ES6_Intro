const person= {
    age:34,
    getAge:function(){
        console.log(this.age); // Burada kullanılan this person nesnesini işaret eder.
    }
}

person.getAge();

// Bind: (HATIRLATMA) Bir fonksiyona bir nesneyi bağlamayı sağlar. Bu fonksiyonun bir kopyasını o nesne için oluşturur.
const person2 = {
    age:25,
    getAge:function(){
        console.log(this);
        console.log(this.age); // bu undefined olacaktır.Çünkü window nesnesinde age property bulunmuyor.
    }.bind(this) // Burada BIND ile THIS bağlarsak burada ki this window nesnesi olacaktır.
    // Yani bind root ( window) nesnesini buraya bağlar.
}
person2.getAge();

// Arrow Func.
const personArrow = {
    age:30,
    getAge:()=>{
        console.log(this);
        console.log(this.age);
    } 
    // Burada kullanılan arrow function aslında bir yukarıda bulunan bind şeklinde çalışır.
    // burada bulunan this 'de window nesnesidir.
}
personArrow.getAge();
