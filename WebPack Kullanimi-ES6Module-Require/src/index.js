
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

