import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent {

  constructor(private service:DoctorService,private router:Router){

  }

  doctor={
    'doctor_id':0,
    'doctor_name':'',
    'specialty':'',
    'contactNumber':''
  }

  updateDoctor(doctor:any) {
    this.service.UpdateDoctor(this.doctor).subscribe(
      (response) => {
        console.log("Doctor Updated Successfully", response);
        alert("Doctor Updated Successfully!");
        this.router.navigateByUrl('/all-doctors')
      },
      (error) => {
        console.error('Error:', error);
        alert("Failed to Update Doctor");
      }
    );
  }
}
