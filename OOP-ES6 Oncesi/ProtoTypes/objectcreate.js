// Object.create methodu oluşturuduğumuz bir objeyi bir prototype ile wraplamamızi sağlar. 

const objC = {
    test1:function(){
        console.log("Test 1");
    },
    test2:function(){
        console.log("Test 2");
    }
    
}


console.log(objC); // Burada nesnemiz ve bağlı olduğu Object Prototype ile bir tane protoType oluştu.
// Bunu bir prototype içersine almak istersek ( Bu Kalıtım işlemlerinde işimize yarayacaktır.)

const objectCreate = Object.create(objC);
console.log(objectCreate);

// Kalıtım ve prototype değiştirmek ; ***ONEMLI***

// Boş bir constructor oluşturuyoruz.
function ObjA(){

}

ObjA.prototype.test1 = function(){
    console.log("A nesnesi Test1");
}
ObjA.prototype.test2 = function(){
    console.log("A nesnesi Test2");
}

// Şimdi A nesnesinin root prototype 'ı Object nesne prototype olarak oluşuyor. bunu B nesnesinin prototype ile değiştirceğiz.
function ObjB(title){
    this.title = title;
}
ObjB.prototype.BTest= function(){
    console.log("B nesnesi Test");
}
// BURADA DEĞİŞTİRME İŞLEMİNİ YAPIYORUZ.
ObjB.prototype = Object.create(ObjA.prototype);
const b = new ObjB("Nesne B"); 
console.log(b);
console.log(b.test1());
