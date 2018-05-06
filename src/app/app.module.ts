import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import {Routes, RouterModule} from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CarsService } from './services/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CompareComponent } from './compare/compare.component';

const appRoutes: Routes = [
	{path:'', component: CarsComponent},
	{path:'cars', component: CarsComponent},
	{path:'detail/:id', component: DetailComponent},
	{path:'compare', component: CompareComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    CarsComponent,
    CompareComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
