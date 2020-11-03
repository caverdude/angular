import { StarComponent } from "./star.component";
import { StarfillComponent} from "./starfill.component";
import { RatingComponent } from "./rating.component";
import {FormsModule} from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent} from "./app.component";
import { BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    StarfillComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
