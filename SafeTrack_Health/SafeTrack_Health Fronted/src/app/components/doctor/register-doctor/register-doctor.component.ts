import { Component } from '@angular/core';
import { DoctorComponent } from '../doctor.component';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent {

  constructor(private service:DoctorService){

  }
  doctor={
    'doctor_name':'',
    'specialty':'',
    'contactNumber':''

  }

  onSubmit() {
    this.service.addDoctor(this.doctor).subscribe(
      (response) => {
        console.log('Doctor Added Successfully:', response);
        alert('Doctor Added Successfully');
        this.clearForm();
      },
      (error) => {
        console.error('Failed to Add Doctor:', error);
        alert('Failed to Add Doctor');
      }
    );
  }

  clearForm() {
    this.doctor = {
      doctor_name: '',
      specialty: '',
      contactNumber: ''
    };
  }
}

