import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services';
import { ApiResponse } from '../../shared/reponse.interface';

@Component({
  selector: 'app-user',
  templateUrl: './verifyuser.component.html'
})
export class VerifyuserComponent implements OnInit {
  id: string;
  response: string;
  alertType: string;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('verificationcode');
      this.onVerifyUser();
    });
  }

  onVerifyUser() {
    this.userService.verify(this.id).subscribe(
      (data: ApiResponse) => {
      if (data.success) {
        this.response = data.message;
        this.alertType = 'alert-success';
      } else {
        this.response = data.error;
        this.alertType = 'alert-danger';
      }
    },
      error => {
        this.response = error.error;
      }
    );
  }

}
