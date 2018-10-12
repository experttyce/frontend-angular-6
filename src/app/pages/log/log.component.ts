import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../common/services/authentication.service';
 import {Router} from '@angular/router';



@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private AuthenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    
    this.AuthenticationService.login(' peter@klaven   ', 'cityslicka').subscribe(
      res => {
        console.log(res);      
    });  

  }
  
  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); //

    // Llama al servicio de inicio de sesión a la API 
    this.AuthenticationService.login(username, password).subscribe(

      res => {
       console.log(res);

      },
      error => {
        console.error(error);
        
      },

      () => this.navigate()
    );

  }

  navigate() {
    this.router.navigateByUrl('/home');
  }

}