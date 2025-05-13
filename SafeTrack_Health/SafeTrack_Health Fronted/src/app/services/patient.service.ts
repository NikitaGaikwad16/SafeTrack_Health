import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  registerPatient(patient: any): Observable<any> {
    const addURL = 'http://localhost:8080/patient/insertdata-patient'; // ✅ URL Correct Hai
    return this.http.post(addURL, patient, { responseType: 'text' });
  }
  getAllPatients(): Observable<any> {
    const URL = 'http://localhost:8080/patient/alldata-patient';
    return this.http.get(URL);
  }
  getPatientById(id: number): Observable<any> {
    const URL = `http://localhost:8080/patient/singledata-patient/${id}`;
    return this.http.get(URL);
  }
  updatePatient(patient: any): Observable<any> {
    const URL = 'http://localhost:8080/patient/updatedata-patient';
    return this.http.put(URL, patient, { responseType: 'text' });
  }
  deletePatient(id: number): Observable<any> {
    const URL = `http://localhost:8080/patient/deletedata-patient/${id}`;
    return this.http.delete(URL, { responseType: 'text' });
  }

}
