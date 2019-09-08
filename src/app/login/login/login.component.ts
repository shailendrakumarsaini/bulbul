import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, RequiredValidator } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading : boolean = false;
  public loginForm: FormGroup;
  public registerForm: FormGroup;

  showSingUp = false;
  showSignIn = true;
  constructor(private fb: FormBuilder, private loginService: LoginService,
    private router:Router, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['kkeltestorg@yopmail.com', Validators.required],
      password: ['password', Validators.required]
    });

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  showSignUp() {
    this.showSingUp = true;
    this.showSignIn = false;
  }
  showSignIp() {
    this.showSingUp = false;
    this.showSignIn = true;
  }

  login() {
    this.loading = true;
    this.loginService.login(this.loginForm.value).subscribe(
      data => {
        if(data!=null){
          console.log(data);
          this.toastr.success('Login succesfull');
          this.router.navigate(['dashboard','admindashboard']);
        }
      },
      error => { this.loading = false});

  }

}
