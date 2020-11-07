import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form.component';
import { LoginComponent } from "./login/login.component";

export const routing = RouterModule.forRoot([
  { path:'', component:UserComponent },
  { path:'add',component:UserFormComponent },
  { path:'add/:id', component: UserFormComponent },
  { path:'login', component:LoginComponent },
  { path:'login/:invalidLoginMessage', component:LoginComponent }
]);
