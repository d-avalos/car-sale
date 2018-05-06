import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Array<Object> = [];
  filteredCars: Array<Object> = [];
  brand:String = "";
  checkedLimit = 3;
  checkedNumber = 0;


  constructor(private carsService: CarsService, private router: Router) { 
  	this.carsService.getCars().subscribe(
  		(cars: Array<object>) => this.cars=this.filteredCars=cars
  				.sort((a, b) => a["brand"] < b["brand"] ? -1 : a["brand"] > b["brand"] ? 1 : 0)
  				.map(car => {car["selected"]=false; return car;}),
  		(err:HttpErrorResponse) => console.log(err.message));
  }

  ngOnInit() {
  }

  filterCars(filterText: String) {
  	this.filteredCars = this.cars
  							.filter(car => car["brand"].toLowerCase().indexOf(filterText.toLowerCase()) > -1 )
  							.sort((a, b) => a["brand"] < b["brand"] ? -1 : a["brand"] > b["brand"] ? 1 : 0);
  }

  check(car) {
  	car.selected ? this.checkedNumber++ : this.checkedNumber--;
  }

  isEnable(car) {
  	return !car.selected && this.checkedNumber === this.checkedLimit;
  }

  btnCcompare() {
  	const carsToCompare = this.filteredCars.filter(car => car["selected"]).map(car => car["id"]);
    this.router.navigateByUrl('/compare?cars='+carsToCompare.toString());
  }
}
