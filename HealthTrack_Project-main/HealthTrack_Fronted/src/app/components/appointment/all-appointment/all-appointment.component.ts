import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-all-appointment',
  templateUrl: './all-appointment.component.html',
  styleUrls: ['./all-appointment.component.css']
})
export class AllAppointmentComponent implements OnInit{
editAppointment(_t30: any) {
throw new Error('Method not implemented.');
}

  appointments: any[] = [];

   constructor(private service:AppointmentService){

    }

    ngOnInit(): void {
      this.getAllAppointments();
    }
    getAllAppointments() {
      this.service.getAllAppointments().subscribe(
        (response) => {
          this.appointments = response;
          console.log("All Appointments Fetched:", response);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }

    deleteAppointment(id: number) {
      if (confirm('Are you sure you want to delete this appointment?')) {
        this.service.deleteAppointment(id).subscribe(
          (response) => {
            console.log('Appointment Deleted Successfully:', response);
            alert('Appointment Deleted Successfully!');
            this.getAllAppointments(); // ✅ Refresh table after delete
          },
          (error) => {
            console.error('Error:', error);
            alert('Failed to delete appointment');
          }
        );
      }
    }

    }


