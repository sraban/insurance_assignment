import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  	console.log("--constructor");
  	//debugger;
  }

}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./app.component.scss']
})
export class HeaderComponent {

  constructor() {
  	
  }

}