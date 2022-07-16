// const connection = require('./db/connection')
const {prompt} = require('inquirer');
require('console.table');

const dataFn = require('./dataFunctions');

function init() {
    prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Pick what you want to do.',
            choices: [
                'view employees',
                'view roles',
                'view departments',
                'add employee',
                'add role',
                'add department',
                'update employee',
                'quit'
            ]
        }
    ]) 
    .then((answer) => {
        console.log(answer.menu)
        var userInput = answer.menu;

        switch (userInput) {
            case 'view employees':
                viewEmployees()
                break;
            case 'view roles':
                viewRoles()
                break;
            case 'view departments':
                viewDepots()
                break;
            case 'add employee':
                createEmp()
                break;
            case 'add role':
                createRoles()
                break;
            case 'add department':
                createDepots()
                break;
            case 'quit':
                quit()
                break;
            default:
                break;
        }
    });
};

init();

// employee functions
async function viewEmployees() {
    const employees = await dataFn.findEmployees();
    console.table(employees)

    init();
}

async function createEmp() {
    const employee = await prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the employees first name?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the employees last name?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role id the employee is associated with?'
        }
    ])

    await dataFn.createEmployee(employee);
    console.log('Employee added!');
    init();
}

// other functions
async function viewDepots() {
    const departments = await dataFn.findDepartment();

    console.table(departments);

    init();
}

async function createDepots() {
    const department = await prompt([
      {
        type: "input",
        name: "name",
        message: "Add the name of the department." 
      }
    ])

    await dataFn.createDepartments(department);

    console.log("Department added!!");
    init();
}

async function viewRoles() {
    const roles = await dataFn.findRole();

    console.table(roles);

    init();
}

async function createRoles() {
    const role = await prompt([
      {
        type: "input",
        name: "title",
        message: "Whats the name of the role?" 
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this role?"
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the dapartment id for this role?"
    }
    ])

    await dataFn.createRole(role);

    console.log("Role added!!");
    init();
}

function quit() {
    console.log('Goodbye!')
    process.exit()
}