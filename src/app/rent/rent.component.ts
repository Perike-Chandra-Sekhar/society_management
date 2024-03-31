import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Resident {
  flatNumber: number;
  name: string;
  rentAmount: number;
  paymentStatus: string;
}

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent implements OnInit {
  residents: Resident[] = [];
  unpaidResidents: Resident[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchResidents();
  }

  fetchResidents(): void {
    this.http.get<Resident[]>('http://localhost:3000/api/residents')
      .subscribe(residents => {
        this.residents = residents;
        this.unpaidResidents = this.residents.filter(resident => resident.paymentStatus === 'unpaid');
      });
  }

  sendReminderEmail(resident: Resident): void {
    // Logic to send email reminder to the resident
    console.log(`Email reminder sent to ${resident.name}`);
  }
}
