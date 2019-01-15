// Javascriptte constructor ve bir nesne oluşturmak alışageldiğimiz dillerin dışında biraz farklıdır.

// Constructor oluşturma
// Büyük harfle başlamalı
// bu method aslında bizim için bir nesnedir.
function Employee(name, age, department, salary){
    // Burada this Employee nesnesini işaret etmektedir.
    this.name = name;
    this.age = age;
    this.department=department;
    this.Salary = ()=>console.log(salary); // Arrow fonk
}

// Şimdi nesnemizi oluşturulalım.
let emp1 = new Employee("Murat",34,"Software Development",30000);
let emp2 = new Employee("Ahmet",38,"Software Development",323263);

console.log(emp1);
console.log(emp2);
emp1.Salary();
emp2.Salary();


