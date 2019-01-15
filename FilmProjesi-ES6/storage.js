// Storage Nesnesi ve constructor
// Bu nesne local storage 'a filmleri eklemek için kullanılır.
// function Storage(){

// }
// // Filmi localstorage ekleme
// Storage.prototype.addFilmToStorage= function(newFilm){
//     let films = this.getFilmFromStorage();
//     films.push(newFilm);

//     localStorage.setItem("films",JSON.stringify(films));
// }
// // Filmi Storage dan silme işlemi
// Storage.prototype.deleteFilmToStorage = function(filmTitle){
//     let films = this.getFilmFromStorage();
//     films.forEach(function(item,index){
//         if(item.title===filmTitle){
//             films.splice(index,1);
//         }
//     });

//     localStorage.setItem("films",JSON.stringify(films));
// }
// // Tüm filmleri local storageden silme
// Storage.prototype.clearAllFilmsFromStorage = function(){
//     localStorage.removeItem("films");
// }

// // Storage Kontrolü ve filmin storage 'dan alınmasını sağlayan genel fonk.

// Storage.prototype.getFilmFromStorage = ()=>{

//     let films;
//     if(localStorage.getItem("films")===null){
//         films=[];
//     }else{
//         films = JSON.parse(localStorage.getItem("films"));

//     }

//     return films;

// }

class Storage {

    constructor() {

    }

    addFilmToStorage(newFilm) {
        let films = this.getFilmFromStorage();
        films.push(newFilm);

        localStorage.setItem("films", JSON.stringify(films));
    }

    deleteFilmToStorage(filmTitle) {
        let films = this.getFilmFromStorage();
        films.forEach(function (item, index) {
            if (item.title === filmTitle) {
                films.splice(index, 1);
            }
        });

        localStorage.setItem("films", JSON.stringify(films));
    }
    
    clearAllFilmsFromStorage(){
        localStorage.removeItem("films");
    }

    getFilmFromStorage() {
        let films;
        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"));

        }

        return films;
    }
}