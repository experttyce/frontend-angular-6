import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  test: Date = new Date();
  title = 'DashboardSeko';
  isCollapsed = true;
}
