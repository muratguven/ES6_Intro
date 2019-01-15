// Map kullanımı örneği

const users = [
{name:"Murat",age:34},
{name:"Nisan",age:1},
{name:"ebb",age:30}

];

//Map bir array objesinde istenilen özelliği seçmemizi sağlar.

const names = users.map(function(user){
    return user.name;
});

console.log(names);