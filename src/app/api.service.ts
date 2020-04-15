import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(public http: HttpClient
    
    ) { }
  getHistorical(location){
    return this.http.get(
      "https://api.weatherstack.com/historical?access_key=7d943ce723d7ddea226fd1806a40fb60&historical_date=2020-04-12&units=f&hourly=1&interval=3&query=" +
      location 
    )
  }
   }
   