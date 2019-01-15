// Call ve Apply Kullanımı: İki methodun da yaptığı işlem aynıdır. Sadece kullanım şekillşeri farklıdır.
// İki method da bir method içersinde parametre olarak verilen nesneyi kullanmamızı sağlar.

// Örnek

const obj1 = {
    number1: 10,
    number2: 20
}

const obj2 = {
    number3: 30,
    number4: 40
}

//İki nesne oluşturduk Obj1 nesnesini bir function içersinde kullanmayı deneyelim.

function addNumbersWithObj1(a,b){
    console.log(this.number1+this.number2+a+b);  //Normal şekilde kullandığımızda-bu method hata verecektir. 
    //burada kullanılan this window nesnesini işaret eder. Bunun için Call veya Apply methodları kullanılır.
}
//CALL KULLANIMI
addNumbersWithObj1.call(obj1,100,200);
//APPLY KULLANIMI sadece farkı methodun bağımsız argümanları (a ve b)  array şeklinde verilmeli
addNumbersWithObj1.apply(obj1,[100,200]);

//BIND Kullanımı: Bind yine aynı işlemi yapar yani bir fonksiyonu bir objeye bağlamaya yarar.
// Kullanımı diğerlerinden biraz farklıdır.
// Çalışma mantığı bind fonksiyonu verilen objede birer kopya oluşturup çalışır. 
// Genelde kullanım yerleri EVENT 'lerdir.

const copyFunc1 = addNumbersWithObj1.bind(obj1);
copyFunc1(100,200);


