import { Component } from '@angular/core';
import { MedicalRecordService } from 'src/app/services/medical-record.service';

@Component({
  selector: 'app-add-medical-record',
  templateUrl: './add-medical-record.component.html',
  styleUrls: ['./add-medical-record.component.css']
})
export class AddMedicalRecordComponent {

  constructor(private service: MedicalRecordService) {}

  record = {
    // record_id: 2,
    diagnosis: '',
    prescription: '',
    treatment: '',
    date_of_record: new Date(),
    patient: {
      patient_id: 0
    }
  };

  // ✅ Submit Function
  onSubmit() {
    this.service.addMedicalRecord(this.record).subscribe(
      (response) => {
        console.log('Medical Record Added:', response);
        alert('Medical Record Added Successfully');
        this.clearForm();
      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to Add Medical Record');
      }
    );
  }

  // ✅ Clear Form Function
  clearForm() {
    this.record = {
      // record_id: 2,
      diagnosis: '',
      prescription: '',
      treatment: '',
      date_of_record: new Date(),
      patient: {
        patient_id:0
      }
    };
  }
}
