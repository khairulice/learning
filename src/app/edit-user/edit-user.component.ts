import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditUserComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  get f() { return this.userForm.controls; }

  constructor(private userService: UserServiceService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.userService.getUser(this.route.snapshot.params['id'])
      .subscribe(data => {
        console.log(data);
        this.id = data._id;
        this.userForm.setValue({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email
        });
      });

    this.userForm = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]]
    });

  }
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    else {
      const user: User = Object.assign({}, this.userForm.value);
      user._id = this.id;
      this.userService.updateMember(user).subscribe(
        res => { 
          this.router.navigate(['/users']); },
        err => { console.log(err); });

    }
  }

}
