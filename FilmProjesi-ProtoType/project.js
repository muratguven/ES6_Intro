const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const clearButton = document.getElementById("clear-films");
// const cardBodies = document.querySelectorAll(".card-body");

// Şimdi UI nesnesini kullanalım

const ui = new UI(); // UI nesnemiz

const storage = new Storage(); // Storage Nesnemiz
// Event yükleme için fonk.

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessages("Lütfen Tüm Alanları Doldurun..","danger");
    }else{
        const newFilm = new Film(title,director,url); // Film nesnesi oluşturma
        ui.addFilmToUI(newFilm); // Arayüze Film ekleme 
        storage.addFilmToStorage(newFilm); //Storage'a film ekleme
    }
    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}


function deleteFilm(e){

    if(e.target.id==="delete-film"){
        ui.deleteFilmFromUI(e.target);
        let filmTitle = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        storage.deleteFilmToStorage(filmTitle);
        ui.displayMessages("Film Silindi.","success");
    }

}

function clearAllFilms(e){
    storage.clearAllFilmsFromStorage();
    ui.clearAllFilmsFromUI();
}