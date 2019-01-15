class Employee {
    
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log('Adı:'+this.name+' Yaş:'+this.age+' Maaş:'+this.salary);
    }

    static calculateSalary(x){
        console.log('Static method :'+(x*12));
    }

}

const emp = new Employee("Murat",34,7000);
emp.showInfos();

// Static method kullanımı
Employee.calculateSalary( 7200);