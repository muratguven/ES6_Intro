import {Request} from "./request";
import {UI} from "./ui";

const form  = document.getElementById("employee-form");
const nameInput  = document.getElementById("name");
const departmentInput  = document.getElementById("department");
const salaryInput  = document.getElementById("salary");
const employeeList  = document.getElementById("employees");
const updateEmployeeButton  = document.getElementById("update");
const request = new Request("http://localhost:3000/employees");
const ui = new UI();


eventListerners();

function eventListerners(){
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee);
    employeeList.addEventListener("click", deleteEmployee);
}

function getAllEmployees(){
     request.get()
        .then(employees=>{
            ui.addAllEmployeesToUi(employees);
        })
        .catch(err=>console.log(err));
    
}


function addEmployee(e){

    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();
    if(employeeName==""||employeeDepartment==""||employeeSalary==""){
        alert("Lütfen alanları tam doldurun....");
        
    }else{
        request.post({name:employeeName,department:employeeDepartment, salary:Number(employeeSalary)})
        .then(employee=>{
            ui.addEmployeesToUi(employee);
        })
        .catch(err=>console.log(err));

    }
    
    ui.clearInputs();
    e.preventDefault();
}


