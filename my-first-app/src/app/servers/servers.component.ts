import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', element selector
  //selector: '.app-servers',  clsss selector
  selector: '[app-servers]', //attribute selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
