import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CarsService {
	// cars: any = {};

    constructor(private httpService: HttpClient) {
    }	

     public getCars() {
     	return this.httpService.get("./assets/cars.json");
     }
}