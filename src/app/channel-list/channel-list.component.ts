import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.getChannelList();
  }

  getChannelList(){
 this.http.get('../../assets/channel.json').subscribe(response =>  {
   console.log(response);
 });
  }
}
