import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';



import { AuthenticationService } from '../../shared/services/authentication.service';


@Component({templateUrl: 'log.component.html',
providers:[AuthenticationService]
})
export class LogComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    message: string;
  
    constructor(
  //      public toastr: ToastrManager,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        
        private authenticationService: AuthenticationService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }


    showSuccess() {
        
    }

    onSubmit() {
        this.submitted = true;
        this.message=     '';

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
           
        }

        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
           .pipe(first())
            .subscribe((data) => {
                //alert('Te has logueado correctamente');
                this.router.navigate(['/dashboard']);
                 // console.log(data);
                
                },
                error => {
                    this.message=error;
                   
                    this.loading = false;
                });
    }





}
