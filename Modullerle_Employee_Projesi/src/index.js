import {Request} from "./request";
import {UI} from "./ui";

const form  = document.getElementById("employee-form");
const nameInput  = document.getElementById("name");
const departmentInput  = document.getElementById("department");
const salaryInput  = document.getElementById("salary");
const employeeList  = document.getElementById("employees");
const updateEmployeeButton  = document.getElementById("update");

eventListerners();

function eventListerners(){
    document.addEventListener("DOMContentLoaded", getAllEmployees);
}

function getAllEmployees(){

    
}