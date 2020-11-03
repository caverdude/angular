import { StarComponent } from "./star.component";
import { StarfillComponent} from "./starfill.component";
import { RatingComponent } from "./rating.component";
import {FormsModule} from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent} from "./app.component";
import { BrowserModule} from "@angular/platform-browser";
import { ProductComponent} from "./product.component";
import { ProductsComponent} from "./products.component";

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    StarfillComponent,
    RatingComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
