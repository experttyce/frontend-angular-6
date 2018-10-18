import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { UserService } from '../../services';
import { ApiResponse } from '../../shared/reponse.interface';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import swal from'sweetalert2';
declare var jQuery: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit  {
  @ViewChild('signUpSwal') private signUpSwal: SwalComponent;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  msgapi: null;
  signupResult: string;
  customText: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      url: window.location.origin
    });
    // this.openModal('welcome')

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.msgapi = null;
    this.submitted = true;
    this.signupResult = '';
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .subscribe(
        (data: ApiResponse) => {
          swal({
            title: 'Successful!',
            text: data.message,
            type: 'success',
            allowOutsideClick: false
          }).then(() => {
            this.router.navigate(['/auth/signin']);
          })
        },
        error => {
          this.msgapi = error;
          this.loading = false;
        });
  }


  ngAfterViewInit() {
    jQuery('.i-checks').iCheck({
      checkboxClass: 'icheckbox_square-green',
      radioClass: 'iradio_square-green'
    });
  }

}
