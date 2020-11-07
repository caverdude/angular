import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form.component';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./login/signup.component";


export const routing = RouterModule.forRoot([
  { path:'', component:UserComponent },
  { path:'add',component:UserFormComponent },
  { path:'add/:id', component: UserFormComponent },
  { path:'login', component:LoginComponent },
  { path:'login/:invalidLoginMessage', component:LoginComponent },
  { path:'signup', component:SignupComponent },
  { path:'signup/:invalidLoginMessage', component:SignupComponent}
]);
