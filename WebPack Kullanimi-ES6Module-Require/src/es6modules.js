// ES6 Modulleri: Commonjs modüllerine göre tanımlama ve yazımları daha kolay modullerdir.
// Es6 ile gelen yeni kullanım ile bir fonk bir nesneyi veya değişkeni export etmek için export syntax kullanıyoruz.

//Ör;

export const name = "Murat";
export function test3(){
    console.log('ES6 export örneği');
}

export class Employee{
   
    static personTest(){
        console.log('Bu Person sinifidir.');
    }
}

// Default export işlemi: Import işlemi sırasında destructing şeklinde kullanmak zorunda olmadan varsayılan olarak
//export etmemizi sağlar.
export default class Deneme{
    static deneme(){
        console.log('Default export deneme');
    }
}

