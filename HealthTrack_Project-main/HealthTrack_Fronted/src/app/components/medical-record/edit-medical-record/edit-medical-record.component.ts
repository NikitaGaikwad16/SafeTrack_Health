import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalRecordService } from 'src/app/services/medical-record.service';


@Component({
  selector: 'app-edit-medical-record',
  templateUrl: './edit-medical-record.component.html',
  styleUrls: ['./edit-medical-record.component.css']
})
export class EditMedicalRecordComponent {

  constructor(private service: MedicalRecordService,private router:Router) {}

    record = {
      record_id: 0,
      diagnosis: '',
      prescription: '',
      treatment: '',
      date_of_record: new Date(),
      patient: {
        patient_id: 0
      }
    };

    onSubmit(record:any) {
      this.service.updateMedical(this.record).subscribe(
        (response) => {
          console.log("Medical-Record Update Successfully", response);
          alert("Medical-Record Update Successfully!");
          this.router.navigateByUrl('/all-medical-records')
        },
        (error) => {
          console.error('Error:', error);
          alert("Failed to Update MedicalRecord");
        }
      );
    }

}
