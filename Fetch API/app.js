/*
FETCH API:  Ajax alternatifi olarak kullanılan veri alma ve gönderme işlemini yapar.
Fetch api işlem sonucunda bize bir promise nesnesi dönüyor.
Başarılı ise then fonk. ile sonuçları alıyoruz. Hatalı ise reject fonk. ile 
hata durumunu bize döndürür.

*/

// İlk Örnek data.txt dosyasından get requesti ile veri okuyalım.

function getTextFile(){

    fetch("data.txt").then(response=>{
        // burada response promise döndü
        console.log(response);
        return response.text()
    })
    // ikinci then promise chain olarak kullanım: birinci then de promise dönüyor ve ikinci then de bunu kullanıyoruz.
    .then(data=>console.log(data))
    // burada hata olduğunda(reject) olduğunda çalışır.
    .catch(err=>console.log(err));
}

getTextFile();

// Json Data Örneği

function getJsonFile(){

    fetch("example.json")
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}

getJsonFile();