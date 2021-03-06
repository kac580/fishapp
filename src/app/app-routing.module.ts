import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { LinksComponent } from './links/links.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: "", component: WeatherComponent},
  { path: "Header", component: HeaderComponent},
  { path: "Home", component: WeatherComponent},
  { path: "Links", component: LinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
