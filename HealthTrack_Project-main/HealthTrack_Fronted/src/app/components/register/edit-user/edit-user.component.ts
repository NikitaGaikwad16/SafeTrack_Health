import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  constructor(
    private service: UserService,
    private router: Router,

  ) {}

  user = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    role: ''
  };

  updateUser() {
    this.service.updateUser(this.user).subscribe(
      (response) => {
        console.log('User updated:', response);
        alert('User Updated Successfully');
        this.router.navigateByUrl('/all-users');
      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to Update User');
      }
    );
  }
}
