import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {LOCALE_ID} from '@angular/core'

import {FormsModule} from '@angular/forms';   
import {CalcPremiumService} from './services/calc-premium.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule 
  ],
  providers: [CalcPremiumService,{provide:MAT_DATE_LOCALE, useValue:'en-AU'}, {provide:LOCALE_ID, useValue:'en-AU'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
