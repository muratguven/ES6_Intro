// Javascript'te en üst nesne window nesnesidir. Bunu window veya this ile kullanabiliriz. bazi window 
// methodları alert, prompt, confirm

console.log(this);
//console.log(window);  aynısı
// window nesnesi location özelliği 
console.log(this.location);
console.log(window.location.href);
if(window.confirm("Sayfa Yenilensin mi ?")){
    window.location.reload();
}else{
    console.log("Sayfa Yenilenmedi.")
}