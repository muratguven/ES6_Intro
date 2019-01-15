// IIFE Functions : Immediatly Invoked Function Expression
// Tanımlandığı yerde çalışan fonksiyonlar.

(function(name){
    console.log(name);
})("MURAT IIFE tipi fonksiyon kullanım örneği");

// Anonim Fonsiyonlar Methodlar : Objelerimizin içersinde kullanılan fonksiyonlardır.

const database = {
    host:"localhost",
    add:function(item){
        console.log(`${item} eklendi.`);
    },
    get:function(){
        console.log("get methodu çalıştı.");
    },
    update:function(id){
        console.log(`${id} eleman güncellendi.`);
    }

}


console.log(database.host);
database.add("A-Item");
database.get();
database.update(33);
