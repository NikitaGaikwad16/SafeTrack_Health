import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-all-patient',
  templateUrl: './all-patient.component.html',
  styleUrls: ['./all-patient.component.css']
})
export class AllPatientComponent implements OnInit{


  constructor(private service:PatientService){

  }
  ngOnInit(): void {
    this.getAllPatients();
  }
  patients:any[]=[];

  getAllPatients() {
    this.service.getAllPatients().subscribe(
      (response) => {
        this.patients = response;
        console.log(response);
      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to load patients');
      }
    );
  }

  deletePatient(patientId: number) {
    if (confirm('Are you sure you want to delete this patient?')) {
      this.service.deletePatient(patientId).subscribe(
        (response) => {
          console.log('Patient deleted successfully:', response);
          alert('Patient Deleted Successfully');
          this.getAllPatients(); // Refresh the list
        },
        (error) => {
          console.error('Error:', error);
          alert('Failed to delete patient');
        }
      );
    }
  }
}
