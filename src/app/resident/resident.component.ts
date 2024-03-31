import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Payment {
  month: string;
  date: string;
  amount: number;
  status: string;
  fine: number;
}

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.css']
})
export class ResidentComponent implements OnInit {
  payments: Payment[] = [];
  months: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPayments();
  }

  fetchPayments(): void {
    this.http.get<Payment[]>('YOUR_API_URL')
      .subscribe(
        (payments: Payment[]) => {
          this.payments = payments;
          this.populateMonths();
        },
        (error: any) => {
          console.error('Error fetching payment details:', error);
        }
      );
  }

  populateMonths(): void {
    this.months = Array.from(new Set(this.payments.map(payment => payment.month)));
  }

  getPaymentsByMonth(month: string): Payment[] {
    return this.payments.filter(payment => payment.month === month);
  }

  getTotalAmount(payments: Payment[]): number {
    return payments.reduce((total, payment) => total + payment.amount, 0);
  }

  getPaymentStatus(payments: Payment[]): string {
    return payments.some(payment => payment.status === 'unpaid') ? 'Unpaid' : 'Paid';
  }

  getFine(payments: Payment[]): number {
    return payments.reduce((total, payment) => total + payment.fine, 0);
  }
}
