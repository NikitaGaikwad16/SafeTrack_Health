import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

  constructor(private http:HttpClient) { }

  addMedicalRecord(record:any):Observable<any>{
    const URL="http://localhost:8080/medicalrecord/insertdata-medicalrecord";
    return this.http.post(URL, record, { responseType: 'text' });
  }
  getMedicalRecordById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/medicalrecord/singledata-medical/${id}`);
  }
  getAllMedicalRecords(): Observable<any> {
    const URL = 'http://localhost:8080/medicalrecord/alldata-medical';
    return this.http.get(URL);
  }
  deleteMedicalRecord(id: number): Observable<any> {
    const URL = `http://localhost:8080/medicalrecord/deletedata-medical/${id}`;
    return this.http.delete(URL, { responseType: 'text' });
  }

  updateMedical(record:any):Observable<any>{
    const URL="http://localhost:8080/medicalrecord/updatedata-medical";
   return  this.http.put(URL,record,{responseType: 'text'})
  }

}
