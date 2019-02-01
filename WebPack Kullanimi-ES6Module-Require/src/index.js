
import {Person} from "./app1";
import {Employee} from "./app2";
/*
WEBPACK: Projelerimizde kullandığımız birbirine bağlı olan tüm javascript, css ve image dosyalarını
tek bir dosya haline getirmemize yarar.( BUNDLE )
Ayrıca bu işlem javascript import karmaşıklığını önler ve javascript, css ve image dosyalarımızın 
sayfaya yükleme zamanlarını kısaltır. Bu örneğimizde Babel ile WebPack kullanımını yapıyoruz.
1- npm init ( package.json dosyası oluştur)
2-npm i @babel/core @babel/polyfill @babel/preset-env @babel\loader paketlerini kuruyoruz.
3- aynı şekilde webpack-cli ve webpack paketlerimizi kuruyoruz.
*/



Person.Test();
Employee.Test();
console.log("Hello WebPack Adamsın!");

// Fonksiyon export örneği kullanımı (Require) 
// Require ile kullandığımız module fonksiyonu app değişkenine atıyoruz.
const app = require('./module');
// Artık fonk. olarak kullanabiliriz.
console.log(app);
//module1();

// exportları obje olarak döndüğümüzde

// app.test1();
// app.test2();


// Obje olarak tanımlama kullanım örneği;
console.log(app.name);
app.test1();
console.log(app.person);

// ES6 ile EXPORT işlemi için IMPORT Kullanımı
// bu import için dosya içerisindeki her export elemanını böyle tek tek yazmamak için import * şekilde kullanabiliriz.
import { name, test3 } from './es6modules';
console.log(name);
test3();

import * as esmodule from './es6modules';



esmodule.Employee.personTest();

// Default export için import kullanımı
// Default olduğundan dolayı Burada süslü parantez kullanımı yani destructing yapısı kullanılmıyor.
import Deneme from './es6modules';

Deneme.deneme();