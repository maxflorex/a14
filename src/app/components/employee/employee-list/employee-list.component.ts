import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

	employees: Employee[] = [
		{
			id: '111',
			name: 'Narciso Perez',
			email: 'n@jsias.com',
			phone: 93939923,
			salary: 24000,
			department: 'Salud'
		},
		{
			id: '222',
			name: 'Juana Pepito',
			email: 'n@jsias.com',
			phone: 93939923,
			salary: 24000,
			department: 'Salud'
		},
		{
			id: '333',
			name: 'Marcos Mencias',
			email: 'n@jsias.com',
			phone: 93939923,
			salary: 24000,
			department: 'Salud'
		},
	]

	constructor() { }

	ngOnInit(): void {
		// this.employees.push()
	}

}
