document.getElementById("ajax").addEventListener("click",getAllEmployees);
const employeeList = document.getElementById("employees");
function getAllEmployees(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET","employees.json",true);

    xhr.onload = function(){
        if(this.status==200){
            let employees = JSON.parse(this.response);
            console.log(employees);
            employees.forEach(element => {
                employeeList.innerHTML += `<tr>
                <td>${element.name}</td>
                <td>${element.department}</td>
                <td>${element.salary}</td>
              </tr>`
            });
        }
    }

    xhr.send();

}