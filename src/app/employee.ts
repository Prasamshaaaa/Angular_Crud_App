export class Employee {
    public id: number;
    public employee_name: string;
    public employee_salary: string;
    public employee_age: string;
    public profile_image: any;
}

export class EmployeeInfo {
    public data: Array<Employee> = new Array<Employee>();
    public message: string;
    public status: string;
}
