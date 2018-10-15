import { Component, OnInit } from '@angular/core';
import { detectBody } from '../../../app.helpers';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  public ngOnInit(): any {
    detectBody();
  }

  public onResize() {
    detectBody();
  }
}
