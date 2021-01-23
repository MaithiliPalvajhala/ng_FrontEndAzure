import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class CalcPremiumService {

  
  constructor(public http:Http) { 
  }

  CalculateDeathPremium(occ : string){  
    return this.http.get('https://localhost:44335/api/calculatepremium?occupation='+occ); 
  }  

  GetOccupations()
  {
    return this.http.get('https://localhost:44335/api/calculatepremium'); 
  }
}
