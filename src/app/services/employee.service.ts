import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeDetails: any;
  
  constructor(private http: HttpClient) {
    this.employeeDetailsList();
  }
  employeeDetailsList() {
    this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees').subscribe(response => {
      this.employeeDetails = response;
      console.log(this.employeeDetails)
    })
  }
}
