import { Component } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent {
    constructor(private service:BillingService){

    }

bill={
  patient:{
    patient_id:0
  },
  totalAmount:0,
  paymentStatus:'',
  billingDate:new Date(),

};

    
onSubmit(){
  this.service.addBilling(this.bill).subscribe((response)=>{
    console.log(response);
    alert("bill add successfully")
    this.clearForm();
  },
  (error) => {
    console.error('Error:', error);
    alert("Failed to Add Bill");
  }
);
}
clearForm() {
  this.bill = {
    patient:{
      patient_id:0
    },
    totalAmount:0,
  paymentStatus:'',
  billingDate:new Date(),
  };
}
}
