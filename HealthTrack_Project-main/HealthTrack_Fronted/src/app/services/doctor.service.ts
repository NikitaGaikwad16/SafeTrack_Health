import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  addDoctor(doctor:any):Observable<any>{
    const addURL="http://localhost:8080/doctor/insertdata-doctor";
    return this.http.post(addURL,doctor,{ responseType: 'text' })
  }


  getAllDoctors(): Observable<any> {
    const getURL = 'http://localhost:8080/doctor/alldata-doctor';
    return this.http.get(getURL);
  }

  DeleteDoctor(id: number): Observable<any> {
    const URL = `http://localhost:8080/doctor/deletedata-doctor/${id}`;
    return this.http.delete(URL, { responseType: 'text' });
  }

  UpdateDoctor(doctor:any):Observable<any>{
      const URL="http://localhost:8080/doctor/updatedata-doctor";
      return this.http.put(URL,doctor,{ responseType: 'text' });
  }

  getDoctorById(id: number): Observable<any> {
    const URL = `http://localhost:8080/doctor/singledata-doctor/${id}`;
    return this.http.get(URL);
  }



}
