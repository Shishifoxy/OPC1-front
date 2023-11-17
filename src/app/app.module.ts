import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CamembertMedaillesComponent } from './components/camembert-medailles/camembert-medailles.component';
import {NgChartsModule } from 'ng2-charts';
import { CountryService } from '../../src/app/core/services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CamembertMedaillesComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
