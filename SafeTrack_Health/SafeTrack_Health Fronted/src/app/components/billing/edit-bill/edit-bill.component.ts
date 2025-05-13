import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.css']
})
export class EditBillComponent {

  constructor(private service:BillingService, private router:Router) {}

  billing = {
    id: 0,
    totalAmount: 0,
    paymentStatus: '',
    billingDate: '',
    patient: {
      patient_id: 0
    }
  };

  updateBilling() {
    this.billing.billingDate = new Date(this.billing.billingDate).toISOString().split('T')[0]; // ✅ Fix: Date format ko sahi karo
    this.service.UpdateBill(this.billing).subscribe(
      (response) => {
        console.log('Billing updated:', response);
        alert('Billing Updated Successfully');
        this.router.navigateByUrl('/all-billings')

      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to Update Billing');
      }
    );
  }
}

