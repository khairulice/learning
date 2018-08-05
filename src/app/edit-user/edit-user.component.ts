import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditUserComponent implements OnInit {
  private user: User;
  private submitted=false;
  
  constructor(private userService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUser(this.route.snapshot.params['id'])
    .subscribe(data  => { 
      console.log(data); 
      this.user = data;  });

  }
  onSubmit() { 
    this.submitted = true;  
    this.userService.updateMember(this.user);
  }  

}
