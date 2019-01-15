
// Select elements for UI 
const cardBodies = document.querySelectorAll(".card-body");
const filmList = document.getElementById("films");
//UI constructor
function UI(){

}
// Film listesine yeni bir film eklemek için kullanılır.
UI.prototype.addFilmToUI = function(newFilm){
    console.log(newFilm);

    // Burada UI 'da tabloya filmi eklememiz lazım
    const filmList = document.getElementById("films");

    const newItem = `<tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>`;

  filmList.innerHTML+=newItem;
}
//Formu temizlemek için kullanılır.
UI.prototype.clearInputs=function(element1, element2, element3){
    element1.value="";
    element2.value="";
    element3.value="";
}
// UI da Alertleri göstermek için kullanılır
UI.prototype.displayMessages=(message,type)=>{
   
    const divAlert = document.createElement("div");
    divAlert.className = `alert alert-${type}`;
    divAlert.textContent = message;
    cardBodies[0].appendChild(divAlert);

    setTimeout(function(){
        divAlert.remove();
    },2000)
}

UI.prototype.loadAllFilms = (films)=>{
    films.forEach(function(item){
        filmList.innerHTML+= `<tr>
        <td><img src="${item.url}" class="img-fluid img-thumbnail"></td>
        <td>${item.title}</td>
        <td>${item.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>`;
    });
}

UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
    
}

UI.prototype.clearAllFilmsFromUI = function(){
    filmList.innerHTML = "";
}