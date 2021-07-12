import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  OtherInstructionsArray: any = [];

  constructor(public employeeService: EmployeeService, private router: Router) {

  }

  ngOnInit(): void {
    console.log("My service response", this.employeeService.employeeDetails);
    this.OtherInstructionsArray = this.employeeService.employeeDetails.data;
    console.log(this.OtherInstructionsArray);
  }

  ListPageNavigation() {
    this.router.navigate(['/list']);
  }
}
