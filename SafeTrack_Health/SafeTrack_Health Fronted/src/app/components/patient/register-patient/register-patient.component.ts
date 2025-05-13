import { Component } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent {

  constructor(private service:PatientService){

  }

  patient={
    patient_name:'',
    address:'',
    contactNumber:''
  }

  onSubmit(){
    this.service.registerPatient(this.patient).subscribe((response)=>{
    console.log("Patient Registerd Successfully",response);
    alert("Patient Registerd Successfully");
    this.clearForm();
    },

    (error)=>{
      console.error('Error:',error);
      alert("'Failed to Register Patient'");

    }
    );
  }
  clearForm() {
    this.patient={
      patient_name:'',
      address:'',
      contactNumber:'' 
    }
  }

}
