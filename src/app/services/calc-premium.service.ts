import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { animationFrameScheduler } from 'rxjs';
import  Data  from './Data.json';


@Injectable()
export class CalcPremiumService {



constructor(public http:Http) { 
  }

  GetOccupationFactor(occ : string){  

   return this.http.get('https://calculatepremiumwebapi.azurewebsites.net/api/calculatepremium?occupation='+occ); 

  }  

  GetOccupations()
  {
    return this.http.get('https://calculatepremiumwebapi.azurewebsites.net/api/calculatepremium'); 
    
  }
}
