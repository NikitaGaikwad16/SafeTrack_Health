import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css'],


})
export class EditAppointmentComponent {

  constructor(private service:AppointmentService,private router:Router){}

  appointment = {
    appointment_id:0,
    appointment_date: new Date(),
    status: '',
    patient: {
      patient_id: 0
    }
  };

  updateAppointment() {
    this.service.updateAppointment(this.appointment).subscribe(
      (response) => {
        console.log('Appointment Updated Successfully', response);
        alert('Appointment Updated Successfully!');
        this.router.navigateByUrl('/all-appointments'); 
      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to Update Appointment');
      }
    );
  }
}
