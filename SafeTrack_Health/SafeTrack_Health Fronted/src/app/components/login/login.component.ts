import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: UserService, private router: Router) {}

  loginData = {
    'username': '',
    'password': ''
  }

  onSubmit() {
    this.service.loginUser(this.loginData).subscribe(
      (response) => {
        console.log("Login Successfully",response);
        alert("Login successfully");


        if(response!=null){

          if (response.role === 'admin') {
            this.router.navigateByUrl('admin');
          } else if (response.role === 'doctor') {
            this.router.navigateByUrl('doctor');
          } else  {
            this.router.navigateByUrl('patient');
          }
        }
        },
      (error) => {
        console.error('Login Failed:', error.error);
        // if (error.status === 401) {
        //   alert("Invalid username or password!");
        //   this.router.navigateByUrl('/home');
        // } else {
        //   alert("Something went wrong!");
        // }
     alert("Something went wrong!");
      }

  );
  }
}
