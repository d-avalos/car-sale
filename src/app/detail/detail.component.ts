import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { CarsService } from '../services/cars.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id = null;
  car: any = {};
  constructor(private route: ActivatedRoute, private carsService: CarsService) { 
  	this.id = this.route.snapshot.params['id'];
  	this.carsService.getCars().subscribe(
  		(cars:Array<object>) => this.car = cars.filter((car) => car["id"] == this.id)[0] || null,
  		(err:HttpErrorResponse) => console.log(err.message));
  }

  ngOnInit() {
  }

}
