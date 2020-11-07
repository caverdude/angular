import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form.component';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./login/signup.component";
import { AuthGuard} from "./login/auth-guard";


export const routing = RouterModule.forRoot([
  { path:'', component:UserComponent , canActivate:[AuthGuard]},
  { path:'add',component:UserFormComponent, canActivate:[AuthGuard] },
  { path:'add/:id', component: UserFormComponent, canActivate:[AuthGuard] },
  { path:'login', component:LoginComponent },
  { path:'login/:invalidLoginMessage', component:LoginComponent },
  { path:'signup', component:SignupComponent },
  { path:'signup/:invalidLoginMessage', component:SignupComponent}
]);
