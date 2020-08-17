import { Component } from '@angular/core';
import { ChannelService } from './shared/service/channel.service';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from './shared/service/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SPring CT';
  constructor(private channelService: ChannelService,
              private http: HttpClient, private profileService: ProfileService) { }


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.getprofile();

  }
  getprofile() {
    this.http.get('../../assets/profile.json').subscribe(response => {
      console.log(response);
    //  this.profileService.profile = response;
    });
  }
}
