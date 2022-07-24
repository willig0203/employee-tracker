INSERT INTO department (name)
VALUES ('Engineering');
INSERT INTO department (name)
VALUES ('Sales');
INSERT INTO department (name)
VALUES ('Finance');
INSERT INTO department (name)
VALUES ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES ('Software Engineer', '100000', '1');
INSERT INTO roles (title, salary, department_id)
VALUES ('Engineer', '120000', '1');


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', '1', '1'); --null doesn't work here could be 0 for no manager

