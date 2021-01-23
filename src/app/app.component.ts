import { Component } from '@angular/core';
import {User} from './user-details';
import {CalcPremiumService} from './services/calc-premium.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedvalue:string = "default value";
  returnValue:string="";
  OccupationFactor: number = 0;
  occupations = ['Cleaner','Doctor','Author','Farmer','Mechanic','Florist']
  userdetails = new User('robin',45,'30/1/2014',1000,'Author',0);

  calculateDeathPremium(event: any)
  {
    this.userdetails.occupation=event.target.value;
    this.calcPremiumService.CalculateDeathPremium(event.target.value).subscribe(res=> {
      this.OccupationFactor=Number(res.text());
      console.log("Occupation Factor Value"+this.OccupationFactor); 
      this.userdetails.MonthlyPremium = this.userdetails.age*this.userdetails.deathcoversum*this.OccupationFactor/12000;
      this.userdetails.MonthlyPremium = Number(this.userdetails.MonthlyPremium.toPrecision(4));
    }    );
  }
  constructor(private calcPremiumService : CalcPremiumService)
  {
    console.log("before service call");
    this.calcPremiumService.GetOccupations().subscribe(
      res=> {
          this.occupations = res.json();
      }
    );
  }
  
}
