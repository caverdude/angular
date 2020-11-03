import { Component } from '@angular/core';
import {ProductService} from "./product.service";

@Component({
  selector: 'app-root',
  template: `<button class="btn btn-primary" [class.disabled]="!isValid">Submit</button>`,
})
export class AppComponent {
  isValid = false;
}
