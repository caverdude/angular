import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule} from "@angular/forms";

import { HomeComponent} from "./home.component";
import { NotFoundComponent} from "./notfound.component";
import { GitHubComponent} from "./github.component";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NotFoundComponent, GitHubComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
