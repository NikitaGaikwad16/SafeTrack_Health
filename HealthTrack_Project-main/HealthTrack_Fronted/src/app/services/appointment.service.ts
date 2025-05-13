import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  addAppointment(appointment:any): Observable<any> {
    const addURL = 'http://localhost:8080/appointment/insertdata-appointment';
    return this.http.post(addURL, appointment, { responseType: 'text' });
  }

  getAllAppointments(): Observable<any> {
    const getURL = 'http://localhost:8080/appointment/alldata-appointment';
    return this.http.get(getURL);
  }

  getSingleAppointment(id: number): Observable<any> {
    const URL = `http://localhost:8080/appointment/singledata-appointment/${id}`;
    return this.http.get(URL);
  }

  deleteAppointment(id: number): Observable<any> {
    const URL = `http://localhost:8080/appointment/deletedata-appointment/${id}`;
    return this.http.delete(URL, { responseType: 'text' });
  }

  updateAppointment(appointment:any):Observable<any>{
    const URL="http://localhost:8080/appointment/updatedata-appointment";
    return this.http.put(URL,appointment,{ responseType: 'text' });
}


}
