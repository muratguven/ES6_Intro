export class UI {

    constructor() {
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");
        this.employeeList = document.getElementById("employees");
        this.updateEmployeeButton = document.getElementById("update");
    }

    addAllEmployeesToUi(employees){
        let result = "";

        employees.forEach(item => {
            result += `<tr>
                                            
            <td>${item.name}</td>
            <td>${item.department}</td>
            <td>${item.salary}</td>
            <td>${item.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>`;
        });
        this.employeeList.innerHTML=result;
    }

    clearInputs(){
        this.nameInput.value ="";
        this.departmentInput.value ="";
        this.salaryInput.value ="";
    }

    addEmployeeToUI(employee){
        this.employeeList.innerHTML += `<tr>
                                            
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>`;
    }
}