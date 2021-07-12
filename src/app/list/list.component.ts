import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
declare var $: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  OtherInstructionsArray: any = [];
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;

  constructor(public employeeService: EmployeeService, private formBuilder: FormBuilder) { }
  
  show() {
    this.showModal = true;
  }
  
  hide() {
    this.showModal = false;
    this.clearForm();
  }

  clearForm() {
    this.registerForm.reset();
    this.registerForm.controls['id'].setErrors(null);
    this.registerForm.controls['employee_name'].setErrors(null);
    this.registerForm.controls['employee_age'].setErrors(null);
    this.registerForm.controls['employee_salary'].setErrors(null);
  }

  ngOnInit(): void {
    this.OtherInstructionsArray = this.employeeService.employeeDetails.data;
    console.log(this.OtherInstructionsArray);
    this.registerForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      employee_name: ['', [Validators.required]],
      employee_age: ['', [Validators.required]],
      employee_salary: ['', [Validators.required]],

    });
  }

  get f() {
    return this.registerForm.controls;
  }

  // On Submit Form
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted && this.registerForm.controls['id'].value != null && this.registerForm.controls['employee_name'].value != null
      && this.submitted && this.registerForm.controls['employee_age'].value != null && this.submitted && this.registerForm.controls['employee_salary'].value != null) {
      this.showModal = false;
      this.OtherInstructionsArray.push({
        employee_age: this.registerForm.controls['employee_age'].value,
        employee_name: this.registerForm.controls['employee_name'].value,
        employee_salary: this.registerForm.controls['employee_salary'].value,
        id: this.registerForm.controls['id'].value,
        profile_image: ""
      });
      console.log("Push array value", this.OtherInstructionsArray)
      alert("Employee save successfully");
    } else {
      alert("All fields mandatory");

    }
  }

  OnRemove(index: number) {
    this.OtherInstructionsArray.splice(index, 1);
  }

}
