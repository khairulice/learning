import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { VehicleBookingComponent } from './vehicle-booking/vehicle-booking.component';


const appRoutes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'users/register', component: RegisterComponent},
  { path: 'users/:id',component:EditUserComponent },
  { path: 'booking',component:VehicleBookingComponent }
]

export const routing = RouterModule.forRoot(appRoutes);
