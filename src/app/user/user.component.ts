import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private users: User[];
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(res => {
        console.log(res);
        this.users = res;
      }, err => {
        console.log(err);
      });
  }
}
