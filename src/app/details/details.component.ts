import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  OtherInstructionsArray: any = [];

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.OtherInstructionsArray = this.employeeService.employeeDetails.data;
    console.log(this.OtherInstructionsArray);
  }

}
