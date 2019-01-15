// Local Storage : Session storage ile aynıdır. Sadece browser kapatıldığında bu değerler kaybolmaz.

localStorage.setItem("testKey","TestValue");
localStorage.setItem("test2Key","TestValue2");

localStorage.removeItem("test2Key");

console.log(localStorage.getItem("testKey"));

//localStorage.clear();

//Array Yazma
const todos = ["Todo-1","Todo-2","Todo-3"];


localStorage.setItem("todos",JSON.stringify(todos));

