/* Template Literal; ECMA 6 ile gelen bir yenilik string kullanım kolaylığı sağlamaktadır. String içerisinde 
HTML ve javascript kodunu kolayca kullanmamızı sağlamaktadır.
*/


const name = "Murat Güven";
const department = "IT- Software Dev.";
const loc ="İstanbul";

// Eski kullanım yazımı zor
var result = "İsim: "+ name +"\n"+"Departman: "+department+"\n"+"Lokasyon: "+loc;
console.log(result);

// Template Literal
var tResult = `İsim: ${name}\nDepartman: ${department}\nLokasyon: ${loc}`;
console.log(tResult);

// Html ile kullanımı
const htmlResult = `
<ul>
    <li>${name}</li>
    <li>${department}</li>
    <li>${loc}</li>
</ul>
`;
// Sayfanın body içerisinde yaz
document.body.innerHTML = htmlResult;
