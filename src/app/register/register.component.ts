import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  constructor(private userService: UserServiceService) { }
  user = new User();
  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true;  
    this.userService.addMember(this.user);
  }  

}
