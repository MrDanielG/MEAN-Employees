import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    URL_API = 'http://localhost:4000/api/employees';
    selectedEmployee: Employee = {
        name: '',
        office: '',
        position: '',
        salary: 0,
    };
    employees: Employee[];

    constructor(private http: HttpClient) {}

    getEmployees() {
        return this.http.get<Employee[]>(this.URL_API);
    }

    createEmployee(newEmployee: Employee) {
        return this.http.post(this.URL_API, newEmployee);
    }

    updateEmployee(employee: Employee) {
        return this.http.put(`${this.URL_API}/${employee._id}`, employee);
    }

    deleteEmployee(id: string) {
        return this.http.delete(`${this.URL_API}/${id}`);
    }
}
