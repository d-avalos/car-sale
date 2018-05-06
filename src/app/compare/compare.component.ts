import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CarsService } from '../services/cars.service';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  cars: Array<Object> = [];

  constructor(private activatedRoute: ActivatedRoute, private carsService: CarsService) {}


  ngOnInit() {
  	this.activatedRoute.queryParams.subscribe((params: Params) => {
  		if (params['cars']) {
  		  let carsToCompare = params['cars'].split(',').map(Number);
          this.carsService.getCars().subscribe(
	  		(cars: Array<object>) => this.cars=cars
	  				.filter(car => carsToCompare.includes(car["id"])),
	  		(err:HttpErrorResponse) => console.log(err.message));
  		}
      });
  }

}
