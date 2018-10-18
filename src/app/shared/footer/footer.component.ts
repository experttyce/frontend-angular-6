import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  browserName: string;
  constructor() { }

  ngOnInit() {
    this.browserName = navigator.appName + ' ' + navigator.product + ', ' + navigator.platform;
  }

}
