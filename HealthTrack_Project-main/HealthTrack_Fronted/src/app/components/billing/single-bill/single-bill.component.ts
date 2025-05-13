import { Component } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-single-bill',
  templateUrl: './single-bill.component.html',
  styleUrls: ['./single-bill.component.css']
})
export class SingleBillComponent {

  constructor(private service:BillingService) {}

  BillingId: number = 0;
  billing: any = null;

  getBillingById() {
    if (this.BillingId > 0) { // ✅ Check for valid ID
      this.service.getBillingById(this.BillingId).subscribe(
        (response) => {
          this.billing = response;
          console.log('Billing fetched:', response);
        },
        (error) => {
          console.error('Error fetching billing:', error);
          alert('Failed to fetch billing');
        }
      );
    } else {
      alert('Please enter a valid billing ID');
    }
  }
}
