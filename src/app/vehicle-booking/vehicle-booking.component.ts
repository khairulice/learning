import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle-booking',
  templateUrl: './vehicle-booking.component.html',
  styleUrls: ['./vehicle-booking.component.css']
})
export class VehicleBookingComponent implements OnInit {
  submitted = false;
  vehicle = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

  
  onSubmit() { 
    //this.submitted = true;  
    //this.userService.addMember(this.user);
    this.vehicle.setValue('hhh');
  }  

}
