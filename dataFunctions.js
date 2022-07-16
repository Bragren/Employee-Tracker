const connection = require('./db/connection')

class data {
    constructor(connection) {
        this.connection = connection
    }
    findEmployees() {
        return this.connection.query('SELECT * FROM employees')
    }
    findRole() {
        return this.connection.query("SELECT * FROM roles")
    }
    findDepartment() {
        return this.connection.query("SELECT * FROM departments")
    }
    createEmployee(employee) {
        return this.connection.query("INSERT INTO employees SET ?", employee)
    }
    createDepartments(department){
        return this.connection.query("INSERT INTO departments SET ?", department)
    }

    createRole(role){
        return this.connection.query("INSERT INTO roles SET ?", role)
    }
}

module.exports = new data(connection);