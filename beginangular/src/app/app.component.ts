import { Component } from '@angular/core';
import {ProductService} from "./product.service";

@Component({
  selector: 'app-root',
  template: `<button (click)="onClickMe($event)">Submit</button>`,
})
export class AppComponent {
  onClickMe($event){
    console.log("Clicked", $event)
  }
}
