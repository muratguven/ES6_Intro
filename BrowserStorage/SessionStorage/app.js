// Session Storage: Burada bilgiler bizim oturumumuz sürece key value şeklinde tutulur. 
// Session Storage window nesnesinin bir özelliğidir.

// Butonları seçelim 

const btnAdd = document.querySelector("#add");
const btnDel = document.querySelector("#delete");
const btnClear = document.querySelector("#clear");

// Inputları Seçelim

const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const delKey = document.querySelector("#deletekey");

//Butonlara click event'i tanımlayalım

btnAdd.addEventListener("click",addItem);
btnDel.addEventListener("click",deleteItem);
btnClear.addEventListener("click",clearItems);

function addItem(e){
    sessionStorage.setItem(addKey.value,addValue.value);
}
function deleteItem(e){
    sessionStorage.removeItem(delKey.value);
}
function clearItems(e){
    sessionStorage.clear();
}
