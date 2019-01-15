/* DOM Events Kullanımı */

const filterInput = document.getElementById("filter");

filterInput.onfocus = function(){
    console.log("focus eventi tetiklendi!");
}

// Events diğer kullanımı addEventListener fonksiyonu ile istediğimiz event'i tek bir fonk. ile kullanmış oluruz.

filterInput.addEventListener("click",function(e){

    console.log("addEventListener fonk. ile focus eventi tetiklendi.. ");
    //Buradaki e FocusEvent objesi ve tetiklenen elemanın bir çok bilgisini içerir.
    console.log(e);

});

const formTodo = document.getElementById("todo-form");

formTodo.addEventListener("submit",todoFormMethod);

function todoFormMethod(e){
    console.log("Todo Form Submit.");

    // preventDefault methodu submit default event yapısını değiştirmeye yarar. Böylece sayfa yenilenmez.
    // preventDefault methodunu fonk. en altında kullanmamız daha iyidir.
    e.preventDefault();
}

/* INPUT EVENTS */
// DOMContentLoaded bu event sayfa yüklendikten hemen sonra tetiklenir.

document.addEventListener("DOMContentLoaded",load);
function load(e){
    console.log("Sayfa Yüklendi.");
}

const todoInput = document.getElementById("todo");

/*EVENT CAPTURING VE EVENT BUBBLING ÖZELLİKLERİ */
// Bu özellikler document nesnesinin özellikleridir.

//Event Bubbling Özelliği: İçteki bir elementte tetiklenen bir event bu elementin parent'ı içinde tetiklenir.
// parent'ın parent'ı olan element içinde geçerlidir. Bir deniz dibinden yükselen bir kabarcık gibi :D


document.querySelector(".container").addEventListener("click",function(e){
    console.log("div container");
});

document.querySelector(".card.row").addEventListener("click",function(e){
    console.log("card row");
});

// Event Capturing veya Delegation
// Bu Bubbling tam tersidir diyebiliriz.
const cardBodyElement = document.querySelectorAll(".card-body")[1];
cardBodyElement.addEventListener("click",clickEvent);
function clickEvent(e){
    console.log(e.target);
    if(e.target.className==="fa fa-remove"){
       console.log(e.target.parentElement.parentElement);
       e.target.parentElement.parentElement.remove();
    }
}
