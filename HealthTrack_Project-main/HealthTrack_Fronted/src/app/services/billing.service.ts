import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http:HttpClient) { }

  addBilling(billing: any): Observable<any> {
      const URL="http://localhost:8080/bill/add-billing";
      return this.http.post(URL,billing,{responseType: 'text'})
  }

  UpdateBill(billing:any): Observable<any>{
    const URL="http://localhost:8080/bill/update-bill";
    return this.http.put(URL,billing,{ responseType: 'text' });
  }
    getBillingById(id: number): Observable<any> {
      return this.http.get(`http://localhost:8080/bill/Single-Bill/${id}`);
    }

    getAllBills(): Observable<any> {
      return this.http.get(`http://localhost:8080/bill/alldata-bill`);
    }
    deleteBilling(id: number): Observable<any> {
      return this.http.delete(`http://localhost:8080/bill/delete-bill/${id}`, { responseType: 'text' });
    }
}
