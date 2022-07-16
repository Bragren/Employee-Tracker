INSERT INTO departments (name)
VALUES
    ('Engineering'),
    ('Sales'),
    ('HR'),
    ('Legal');



INSERT INTO roles (title, salary, department_id)
VALUES
    ('Computer Engineer', 90000, 3),
    ('Lawyer', 180000, 4),
    ('Sales Associate', 60000, 1),
    ('HR Representative', 80000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 2, 1),
    ('Janet', 'Hawks', 1, null),
    ('Robert', 'Thompson', 3, null),
    ('Maria', 'Tyler', 1, null);