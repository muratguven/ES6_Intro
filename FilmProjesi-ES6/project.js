const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const clearButton = document.getElementById("clear-films");
 const cardBodies = document.querySelectorAll(".card-body");

// Şimdi UI nesnesini kullanalım



const storage = new Storage(); // Storage Nesnemiz
// Event yükleme için fonk.

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmFromStorage();
        UI.loadAllFilms(films);
    });
    cardBodies[1].addEventListener("click",deleteFilm);
    clearButton.addEventListener("click",clearAllFilms);
}

function addFilm(e){

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title==="" || director==="" || url===""){
        // Hata
        UI.displayMessages("Lütfen Tüm Alanları Doldurun..","danger");
    }else{
        const newFilm = new Film(title,director,url); // Film nesnesi oluşturma
        UI.addFilmToUI(newFilm); // Arayüze Film ekleme 
        storage.addFilmToStorage(newFilm); //Storage'a film ekleme
    }
    UI.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}


function deleteFilm(e){

    if(e.target.id==="delete-film"){
        UI.deleteFilmFromUI(e.target);
        let filmTitle = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        storage.deleteFilmToStorage(filmTitle);
        UI.displayMessages("Film Silindi.","success");
    }

}

function clearAllFilms(e){
    storage.clearAllFilmsFromStorage();
    UI.clearAllFilmsFromUI();
}