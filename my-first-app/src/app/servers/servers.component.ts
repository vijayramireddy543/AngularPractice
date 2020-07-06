import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', element selector
  //selector: '.app-servers',  clsss selector
  selector: '[app-servers]', //attribute selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId: number = 1200;
  serverStatus: string = "offline";
  allowToAdd: boolean;

  serverName: string = '';


  constructor() {
    setTimeout(() => {
      this.allowToAdd = true
    }, 2000);
  }

  ngOnInit(): void {
  }

  changeServerStatus() {
    this.serverStatus = "online";
  }

  setServerName(event: any) {
    console.log("event data " + event.target.value);
  }



}
