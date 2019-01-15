class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    showInfos(){
        console.log('Ad:' + this.name+ ' Yaş:'+this.age);
    }
}

// Derived class

class Employee extends Person{

    constructor(name, age, salary){
        super(name, age);
        this.salary = salary;
    }

    // Override showInfo Method

    showInfos(){
        console.log('Ad:' + this.name+ ' Yaş:'+this.age+ ' Maaş:'+this.salary);
    }
}

const emp = new Employee("Murat", 34, 7800);
emp.showInfos();