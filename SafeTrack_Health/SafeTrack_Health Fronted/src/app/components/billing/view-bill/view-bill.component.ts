import { Component, OnInit } from '@angular/core';
import { BillingService } from '../../../services/billing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit{

  constructor(private service:BillingService){}

  bills: any[] = [];

  ngOnInit(): void {
    this.getAllBills();
  }

  getAllBills() {
    this.service.getAllBills().subscribe(
      (response) => {
        this.bills = response;
      },
      (error) => {
        console.error('Error fetching bills:', error);
        alert('Failed to load bills');
      }
    );
  }
  deleteBill(id: number) {
    if (confirm('Are you sure you want to delete this bill?')) {
      console.log(id);
      this.service.deleteBilling(id).subscribe(
        (response) => {
          console.log('Bill deleted:', response);
          alert('Bill deleted successfully!');
          this.getAllBills(); // Refresh list
        },
        (error) => {
          console.error('Error deleting bill:', error);
          alert('Failed to delete bill');
        }
      );
    }
  }
}
