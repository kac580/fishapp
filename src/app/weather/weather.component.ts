import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ["",Validators.required]
    })
  }
sendToAPI(formValues){
  this.apiService.getHistorical(formValues.location).subscribe(data => {
    this.weatherData = data;
    console.log(this.weatherData);
  });
}
}

