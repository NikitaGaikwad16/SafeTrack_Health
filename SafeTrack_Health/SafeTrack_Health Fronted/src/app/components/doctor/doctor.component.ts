import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  
})
export class DoctorComponent {
  constructor(private router:Router){

  }

  registerDoctor() {
    this.router.navigateByUrl('/register-doctor');
  }
  viewAllDoctors() {
    this.router.navigateByUrl('/all-doctor');
  }
}
