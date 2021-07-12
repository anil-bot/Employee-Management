import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, public employeeService: EmployeeService, private router: Router) { }

  // Login Modal Open
  show() {
    this.showModal = true;
  }
  // Login Modal Close
  hide() {
    this.showModal = false;
    this.clearForm();
  }

  clearForm() {
    this.registerForm.reset();
    this.registerForm.controls['email'].setErrors(null);
    this.registerForm.controls['password'].setErrors(null);
  }

  // On Load initialize method
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
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
    if (this.submitted && this.registerForm.controls['email'].value != null && this.registerForm.controls['email'].value != null) {
      this.showModal = false;
      alert("You are successfully logged in");
      this.router.navigate(['/dashboard']);
    } else {
      alert("All fields mandatory");

    }
  }


}
