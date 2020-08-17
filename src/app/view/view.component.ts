import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/service/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {



  constructor(private profileService: ProfileService, private http: HttpClient ) { }
  employees: any;
  ngOnInit(): void {
   this.http.get('../../assets/profile.json').subscribe(response => {
      console.log(response);
      this.employees = response;
    });
  }

}
