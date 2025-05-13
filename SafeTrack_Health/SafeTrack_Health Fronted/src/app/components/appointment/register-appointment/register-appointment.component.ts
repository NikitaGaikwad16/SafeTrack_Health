import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-register-appointment',
  templateUrl: './register-appointment.component.html',
  styleUrls: ['./register-appointment.component.css']
})
export class RegisterAppointmentComponent {

  constructor(private service: AppointmentService) {}

  appointment = {
    appointment_date: new Date(),
    status: '',
    patient: {
      patient_id: 0
    }
  };

  onSubmit() {
    this.service.addAppointment(this.appointment).subscribe(
      (response) => {
        console.log("Appointment Added Successfully", response);
        alert("Appointment Added Successfully!");
        this.clearForm();
      },
      (error) => {
        console.error('Error:', error);
        alert("Failed to Add Appointment");
      }
    );
  }

  clearForm() {
    this.appointment = {
      appointment_date: new Date(),
      status: '',
      patient: {
        patient_id: 0
      }
    };
  }
}
