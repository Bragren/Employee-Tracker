const {prompt} = require('inquirer');
require('console.table');

// const db = require('./db/connection');

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
                'update employee'
            ]
        }
    ]) 
    .then((answer) => {
        console.log(answer.menu)
        var userInput = answer.menu;

        switch (userInput) {
            case 'view employees':
                break;
            case 'view roles':
                break;
            case 'view departments':
                break;
            case 'add employee':
                break;
            case 'add role':
                break;
            case 'add department':
                break;
            case 'update employee':
                break;
            default:
                break;
        }
    });
};

init();

