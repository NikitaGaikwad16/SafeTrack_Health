import { Component } from '@angular/core';
import { MedicalRecordService } from 'src/app/services/medical-record.service';

@Component({
  selector: 'app-view-medical-record',
  templateUrl: './view-medical-record.component.html',
  styleUrls: ['./view-medical-record.component.css']
})
export class ViewMedicalRecordComponent {
  
  recordId: number = 0;
  medicalRecord: any = null;

  constructor(private service: MedicalRecordService) {}

  getMedicalRecord() {
    if (this.recordId) {
      this.service.getMedicalRecordById(this.recordId).subscribe(
        (response) => {
          this.medicalRecord = response;
          console.log(response);
        },
        (error) => {
          console.error('Error:', error);
          alert('Medical Record Not Found');
        }
      );
    } else {
      alert('Please enter a valid Medical Record ID');
    }
  }
}
