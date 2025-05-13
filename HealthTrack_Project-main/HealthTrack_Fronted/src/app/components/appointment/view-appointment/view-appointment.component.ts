import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent {

  appointmentId: number = 0;
  appointment: any = null;

  constructor(private service: AppointmentService) {}

  getAppointment() {
    if (this.appointmentId) {
      this.service.getSingleAppointment(this.appointmentId).subscribe(
        (response) => {
          this.appointment = response;
          console.log(response);
        },
        (error) => {
          console.error('Error:', error);
          alert("Appointment Not Found");
        }
      );
    } else {
      alert('Please enter a valid appointment ID');
    }
  }
}
