import { Component } from '@angular/core';

@Component({
  selector: 'app-paymentreports',
  templateUrl: './paymentreports.component.html',
  styleUrl: './paymentreports.component.css'
})
export class PaymentreportsComponent {

  constructor() { }

  generateInwardPaymentReport(): void {
    // Placeholder logic to generate inward payment report for a given date range
    console.log("Generating Inward Payment Report...");
  }

  generateDelayedPaymentReport(): void {
    // Placeholder logic to generate report for families who make frequent delayed payments
    console.log("Generating Delayed Payment Report...");
  }

  generateYearlySpendingReport(): void {
    // Placeholder logic to generate yearly spending report
    console.log("Generating Yearly Spending Report...");
  }

  generateYoYSpendingIncreaseReport(): void {
    // Placeholder logic to generate report for increase of spendings YoY basis (max last 6 years)
    console.log("Generating YoY Spending Increase Report...");
  }

}
