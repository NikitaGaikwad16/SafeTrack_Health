import { Component } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {
  
  patientId: number = 0;
  patient: any = null;

  constructor(private service: PatientService) {}

  getPatient() {
    if (this.patientId) {
      this.service.getPatientById(this.patientId).subscribe(
        (response) => {
          this.patient = response;
          console.log('Patient Fetched Successfully:', response);
        },
        (error) => {
          console.error('Error:', error);
          alert('Patient Not Found');
        }
      );
    } else {
      alert('Please enter a valid patient ID');
    }
  }
}
