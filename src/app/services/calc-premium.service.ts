import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { animationFrameScheduler } from 'rxjs';
import  Data  from './Data.json';


@Injectable()
export class CalcPremiumService {



constructor(public http:Http) { 
  }

  GetOccupationFactor(occ : string){  

    var ratingObj = Data.OccupationRating.find(item=>item.Occupation===occ);
    var factorobj = Data.OccupationRatingFactor.find(item=>item.Rating===ratingObj?.Rating!)
    return factorobj?.Factor!;
    //WebAPI call
   // return this.http.get('https://localhost:44335/api/calculatepremium?occupation='+occ); 

  }  

  GetOccupations()
  {
    var Occupations : string[];
    Occupations=[];
    
    Data.OccupationRating.forEach(item=>Occupations.push(item.Occupation));
    return Occupations;
    //WebAPI call
    //return this.http.get('https://localhost:44335/api/calculatepremium'); 
    
  }
}
