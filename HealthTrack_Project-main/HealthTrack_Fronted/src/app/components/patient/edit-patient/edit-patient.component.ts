import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent {

  constructor(private service:PatientService,private router:Router){}
  patient = {
    patient_id:0,
    patient_name: '',
    address: '',
    contactNumber: ''
  };

  updatePatient() {
    this.service.updatePatient(this.patient).subscribe(
      (response) => {
        console.log("Doctor Updated Successfully", response);
        alert("Doctor Updated Successfully!");
        this.router.navigateByUrl('/all-patients')
      },
      (error) => {
        console.error('Error:', error);
        alert("Failed to Update Doctor");
      }
    );
  }

}
