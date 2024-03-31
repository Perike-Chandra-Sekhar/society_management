import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { FormsModule } from '@angular/forms';
import { FlatsComponent } from './flats/flats.component';
import { RentComponent } from './rent/rent.component';
import { WorkersComponent } from './workers/workers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResidentComponent } from './resident/resident.component';
import { PaymentreportsComponent } from './paymentreports/paymentreports.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CredentialsComponent,
    FlatsComponent,
    RentComponent,
    WorkersComponent,
    DashboardComponent,
    ResidentComponent,
    PaymentreportsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
