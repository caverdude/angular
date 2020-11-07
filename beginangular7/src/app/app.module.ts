import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuth} from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { UserComponent} from "./user.component";
import { routing } from "./app.routing";
import { UserFormComponent} from "./user-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent} from "./login/login.component";
import { LoginService} from "./login/login.service";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { SignupComponent } from "./login/signup.component";
import { AuthGuard } from "./login/auth-guard";


@NgModule({
  declarations: [
    AppComponent, UserComponent, UserFormComponent, LoginComponent, SignupComponent
  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule, AngularFirestoreModule,ReactiveFormsModule, routing, AngularFireAuthModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
