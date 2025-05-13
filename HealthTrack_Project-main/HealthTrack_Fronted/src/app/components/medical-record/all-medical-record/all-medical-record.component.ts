import { Component, OnInit } from '@angular/core';
import { MedicalRecordService } from 'src/app/services/medical-record.service';

@Component({
  selector: 'app-all-medical-record',
  templateUrl: './all-medical-record.component.html',
  styleUrls: ['./all-medical-record.component.css']
})
export class AllMedicalRecordComponent implements OnInit {

  medicalRecords: any[] = [];

  constructor(private service: MedicalRecordService) {}

  ngOnInit(): void {
    this.getAllMedicalRecords();
  }

  getAllMedicalRecords() {
    this.service.getAllMedicalRecords().subscribe(
      (response) => {
        this.medicalRecords = response;
        console.log(response);
      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to fetch medical records');
      }
    );
  }

  deleteMedicalRecord(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.deleteMedicalRecord(id).subscribe(
        (response) => {
          console.log(response);
          alert('Medical Record deleted successfully');
          this.getAllMedicalRecords(); // ✅ List refresh
        },
        (error) => {
          console.error('Error:', error);
          alert('Failed to delete Medical Record');
        }
      );
    }
  }
  
}
