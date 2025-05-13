import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit{

  doctors: any[] = [];

  constructor(private service:DoctorService){

  }
  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this.service.getAllDoctors().subscribe(
      (response) => {
        this.doctors = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  deleteDoctor(id: number) {
    if (confirm('Are you sure you want to delete this doctor?')) {
      this.service.DeleteDoctor(id).subscribe(
        (response) => {
          console.log("doctor deleted successfully",response);

          alert(response);
          this.GetAll();
        },
        (error) => {
          console.error('Error:', error);
          alert("Failed to delete doctor");
        }
      );
    }
  }

  // doctor={
  //   'doctor_name':'',
  //   'specialty':'',
  //   'contactNumber':''
  // }
  // updateDoctor(doctor:any) {
  //   this.service.UpdateDoctor(this.doctor).subscribe(
  //     (response) => {
  //       console.log("Doctor Updated Successfully", response);
  //       alert("Doctor Updated Successfully!");
  //     },
  //     (error) => {
  //       console.error('Error:', error);
  //       alert("Failed to Update Doctor");
  //     }
  //   );
  // }

}

