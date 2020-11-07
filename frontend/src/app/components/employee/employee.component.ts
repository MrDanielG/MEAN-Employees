import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
    constructor(public employeeSrv: EmployeeService) {}

    ngOnInit(): void {
        this.getEmployees();
    }

    getEmployees() {
        this.employeeSrv.getEmployees().subscribe(
            (res) => {
                this.employeeSrv.employees = res;
            },
            (err) => console.log(err)
        );
    }

    addEmployee(form: NgForm) {
        if (form.value._id) {
            this.employeeSrv.updateEmployee(form.value).subscribe(
                (res) => console.log(res),
                (err) => console.log(err)
            );
        } else {
            this.employeeSrv.createEmployee(form.value).subscribe(
                (res) => {
                    this.getEmployees();
                    form.reset();
                },
                (err) => console.log(err)
            );
        }
    }

    deleteEmployee(id: string) {
        const res = confirm('Are you sure you want to delete this employee?');
        if (res) {
            this.employeeSrv.deleteEmployee(id).subscribe(
                (res) => console.log(res),
                (err) => console.log(err)
            );
            this.getEmployees();
        } else {
            console.log('No se elimino empleado');
        }
    }

    editEmployee(employee: Employee) {
        this.employeeSrv.selectedEmployee = employee;
    }

    resetForm(form: NgForm) {
        form.reset();
    }
}
