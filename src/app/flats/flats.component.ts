import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrl: './flats.component.css'
})
export class FlatsComponent {
  private baseUrl = 'http://localhost:3000'; // Your backend server URL

  constructor(private http: HttpClient) { }

  getFreeFlats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/flats/free`).pipe(
      catchError(error => {
        console.error('Error fetching free flats:', error);
        return throwError(error);
      })
    );
  }

  getOccupiedFlats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/flats/occupied`).pipe(
      catchError(error => {
        console.error('Error fetching occupied flats:', error);
        return throwError(error);
      })
    );
  }
}