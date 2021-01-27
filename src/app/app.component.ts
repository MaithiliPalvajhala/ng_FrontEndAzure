import { Component } from '@angular/core';
import {User} from './user-details';
import {CalcPremiumService} from './services/calc-premium.service';
import {FormGroup, NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedvalue:string = "default value";
  returnValue:string="";
  OccupationFactor: any;
  occupations:string[];
  userdetails = new User('',0,'','','','');



  calculateDeathPremium(event: any, form: any)
    {
      if(form.valid){

       this.userdetails.occupation=event.target.value;
        this.calcPremiumService.GetOccupationFactor(event.target.value).subscribe(res=> {
         this.OccupationFactor=Number(res.text());
          var cover = Number(this.userdetails.deathcoversum.replace(/[^0-9.-]+/g,""));
          var monthPremium = this.userdetails.age*cover*this.OccupationFactor/12000;
          monthPremium = Number(monthPremium.toFixed(2));
          this.userdetails.MonthlyPremium= new Intl.NumberFormat('en-AU',{style: 'currency', currency:'AUD'}).format(monthPremium);
           //document.getElementById(lblMonthly)?.innerHTML=this.userdetails.MonthlyPremium;
       }    );
           
      }
      else
      {
        form.controls.Occupation.reset();
      }
    }
  constructor(private calcPremiumService : CalcPremiumService)
  {
    this.occupations=[];
    this.calcPremiumService.GetOccupations().subscribe(
      res=> {
        this.occupations = res.json();
      }
    );
  }
  currentYear = new Date().getFullYear();
  maxDate = new Date();
  minDate = new Date(this.currentYear-80,0,1);

  changeDate(value : any)
  {
    console.log("date is "+value);
    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    this.userdetails.age=age;
  }

  formatCurrency(event : any)
  {
    var format = new Intl.NumberFormat('en-AU',{style: 'currency', currency:'AUD'}).format(event.target.value);
    this.userdetails.deathcoversum = format;

  }
  
}
