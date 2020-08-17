import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  channelList: any;
  subPackage: any;
  packList: any;

  constructor( private http: HttpClient ) { }

  set packageList(list){
this.packList = list;
  }

  get packageList(){
 return this.packList;
  }
   set ChannelList(list)
   {
    this.ChannelList = list;
   }

   get ChannelList(){
     return this.ChannelList;
   }

   set subscribedPackage(pack)
   {
    this.subPackage = pack;
   }

   get subscribedPackage(){
     return this.subPackage;
   }
}
