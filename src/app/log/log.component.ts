import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  user: any = <any>{};

  constructor(public _authService: AuthenticationService,
              public _router: Router,
              public _locker: SessionStorageService
  ) {
  }

  ngOnInit() {
  }


  // _authService utiliza el metodo de login 
  onSubmit(event: Event) {
    event.preventDefault();
    this._authService.logIn(this.user.username, this.user.password).subscribe(
      (data) => {
          this._authService.user = data;
          this._authService.hasSession = true;
          this._locker.store('user', data);
          this._router.navigate(['/home']);
      },
      err => {
        console.error(err);
        this._authService.hasSession = false;
      }
    );
  }

}