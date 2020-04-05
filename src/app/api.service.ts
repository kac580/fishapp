import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(public http: HttpClient
    
    ) { }
  // getWeather(location) {

  //   return this.http.get(
  //     // Get API service
  //   "https://api.weatherstack.com/current?access_key=7d943ce723d7ddea226fd1806a40fb60&units=f&query=" +
  //   location
  //   );
  //   }
   
  // getDate(yestdate){
  //   let dte = Date;
  //   dte.setDate(dte.getDate() - 1);
  //   return dte
  // }

  getHistorical(location){
    return this.http.get(
      "https://api.weatherstack.com/historical?access_key=7d943ce723d7ddea226fd1806a40fb60&units=f&query=" +
      location +
      "&historical_date=2020-04-03" +
      "&hourly=1"
    )
  }


  
   }
   