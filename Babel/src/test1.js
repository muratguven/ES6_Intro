/*BABEL: ES5 tüm browserlar destekliyor. Fakat ES6 ve sonrasını tüm browserlar desteklemiyor. Bunun için babel kullanıyoruz.
Babel; ES6 ve sonrası scriptlerimizi ES5 'e çevirmeye yarıyor.
Kurulumu için @babel/cli, @babel/core, @babel/polyfill ve @babel/preset-env --save-dev yani developer tool olarak ve
npm kullanarak kurmalıyız. İlk işlem için npm init işlemi yaparak package.json dosyasını oluşturmalıyız.
bunu local olarak kurduktan sonra .\node_modules\.bin\babel ile babel kullanabiliriz.
parametre  olarak verdiğimiz klasör veya dosyayı ES5 'e çevirerek lib isimli bir klasöre ekleyecektir.
*/

// Şimdi ES6 ile bir class oluşturup babel ile çevirelim

class Employee {
    
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log('Adı:'+this.name+' Yaş:'+this.age+' Maaş:'+this.salary);
    }

    static calculateSalary(x){
        console.log('Static method :'+(x*12));
    }

}