import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule} from "@angular/forms";

import { HomeComponent} from "./home.component";
import { NotFoundComponent} from "./notfound.component";
import { GitHubComponent} from "./github.component";
import { ContactComponent} from "./contact.component";
import { GitHubUserComponent} from "./githubuser.component";
import { routing } from "./app.routing";

import { LoginService} from "./login.service";
import { LoginComponent} from "./login.component";
import { AuthGuard} from "./auth-guard.service";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NotFoundComponent, GitHubComponent, ContactComponent, GitHubUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, routing
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
