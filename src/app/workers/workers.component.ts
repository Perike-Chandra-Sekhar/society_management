import { Component } from '@angular/core';

interface Worker {
  workerId: number;
  workerName: string;
  wageAmount: number;
  paymentStatus: string;
}

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.css'
})
export class WorkersComponent {
  workers: Worker[] = [
    { workerId: 1, workerName: 'John Doe', wageAmount: 100, paymentStatus: 'unpaid' },
    { workerId: 2, workerName: 'Jane Smith', wageAmount: 120, paymentStatus: 'paid' },
    // Add more worker data as needed
  ];

  markPaid(worker: Worker): void {
    // Logic to mark the worker as paid, update payment status in the database, etc.
    worker.paymentStatus = 'paid';
  }
}
