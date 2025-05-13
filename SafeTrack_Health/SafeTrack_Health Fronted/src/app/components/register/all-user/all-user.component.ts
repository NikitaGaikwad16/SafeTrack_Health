import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  users: any[] = [];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  deleteUser(username: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.service.deleteUser(username).subscribe(
        (response) => {
          alert('User Deleted Successfully');
          this.getAllUsers();
        },
        (error) => {
          console.error('Error:', error);
          alert('Failed to Delete User');
        }
      );
    }
  }
}
