// Ajax işlemlerini Browser içersinde bulunan XMLHttpRequest objesi ile yapıyoruz
// Holds the status of the XMLHttpRequest.
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready


// butonumuzu seçiyoruz

const button = document.getElementById("btn");
button.addEventListener("click",function(){

    let xhr = new XMLHttpRequest();
    console.log(xhr);

    //Bu kadar uzun yazmaya gerek yok bunun yerine onload özelliğini kullanabiliriz.
    // xhr.onreadystatechange = function(){
    //     // Response status 200 ve ready state 4 (request bitti ve response hazır)
    //     if(this.status==200 && this.readyState==4){
    //         document.getElementById("result").textContent=this.response;
    //     }
    // }

    xhr.onload = function(){
        // bu method sadece readystate 4 olduğunda çalışır.
        if(this.status==200){
            document.getElementById("result").textContent=this.response;
        }
    }
    xhr.onprogress = function(){
        // Bu method readystate 3 olduğu zaman çalışır.
        document.getElementById("result").textContent="Process İşleniyor.....";
    }

    xhr.open("GET","Response.txt",true);
    xhr.send(); // Parametre göndermek istersek bu methoda string şekilde göndermeliyiz.


});
