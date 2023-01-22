//input events
//state - change values
//render- show on screen 

$(document).ready(onReady);

//state
let employees = [];
let totalSalary = 0;

function onReady(){
    console.log('on Ready');

    //intial render
    render ()

    $('#addSalaryForm').on('submit', addEmployee); 
    $('#addSalaryForm').on('submit', calculateTotalSalary); 

    //handle delete button
    $(document).on('click', '.deleteEmployee', onDeleteEmployee);
    $(document).on('click', '.deleteEmployee', calculateTotalSalary);
}

function onDeleteEmployee() {
    let tableRowToDelete = $(this).parent().parent();
    let indexOfEmployee = tableRowToDelete.index();
    employees.splice(indexOfEmployee, 1);

    console.log('in delete, employees left are:', employees);

    render();

}

function addEmployee(event) {
    event.preventDefault();

    let newEmployee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        iD: Number($('#idInput').val()),
        title: $('#titleInput').val(),
        salary: Number($('#salaryInput').val()),
    }

    $('#firstNameInput').val(''),
    $('#lastNameInput').val(''),
    Number($('#idInput').val('')),
    $('#titleInput').val(''),
    Number($('#salaryInput').val('')),
    

    //add to array 
    employees.push(newEmployee);

    render ();

}

function calculateTotalSalary(){
    totalSalary = 0;
    for(let employee of employees){
        totalSalary += (employee.salary/12);
        console.log('this employee', employee, 'and their salary is', employee.salary, 'and total salary is', totalSalary)
    }
  
    console.log(totalSalary);
    render();
}

function render(){
    console.log('in render')

    //empty old data
    $('#employee-table').empty();
    $('#totalEmployeeSalary').empty();

    //show new data
     //render each emplyee object as a <tr>
    // inside the <tbody id="employee-table"> element
    for (let employee of employees){
        console.log(employee.firstName);

        $('#employee-table').append(`
            <tr>
                <td>${employee.firstName}</td> 
                <td>${employee.lastName}</td> 
                <td>${employee.iD} </td> 
                <td>${employee.title} </td> 
                <td>${employee.salary}</td> 
                <td>
                    <button class="deleteEmployee">
                        Delete 
                    </button>
                </td>
            </tr>
        `)
    } //end for loop

    //want to display total employee salary
    if(totalSalary > 0){
        $('#totalEmployeeSalary').append(` 
           <h2> Total Monthly Costs: ${totalSalary} </h2>
        `);
    }
   
    





}