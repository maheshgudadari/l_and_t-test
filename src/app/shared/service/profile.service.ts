import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  EmployeeData: [];
  

  constructor() { }

  set profile(Emloyee){
    this.EmployeeData =  JSON.parse(localStorage.getItem('employee')) || [];
   //  this.EmployeeData.push(Emloyee);
    localStorage.setItem('employee', JSON.stringify(this.EmployeeData));
  }
  get profile() {
 return localStorage.getItem('employee');
  }
}
