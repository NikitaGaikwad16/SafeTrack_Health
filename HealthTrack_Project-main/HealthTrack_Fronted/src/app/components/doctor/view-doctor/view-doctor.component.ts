import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent {

  doctorId: number = 0;
  doctor: any = null;

  constructor(private service: DoctorService) {}

  getDoctor() {
    if (this.doctorId) {
      this.service.getDoctorById(this.doctorId).subscribe(
        (response) => {
          this.doctor = response;
          console.log(response);
        },
        (error) => {
          console.error('Error:', error);
          alert("Doctor Not Found");
        }
      );
    } else {
      alert('Please enter a valid doctor ID');
    }
  }
}
