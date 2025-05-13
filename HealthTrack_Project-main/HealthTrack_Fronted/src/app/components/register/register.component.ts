import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service: UserService, private router: Router) {}

  user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    role: ''
  };

  onSubmit() {
    this.service.registerUser(this.user).subscribe(
      (response) => {
        console.log('User registered:', response);
        alert('User Registered Successfully');
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to Register User');
      }
    );
  }
}
