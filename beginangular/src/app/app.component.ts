import { Component } from '@angular/core';
import {ProductService} from "./product.service";

@Component({
  selector: 'app-root',
  template: `<button class="btn btn-primary">Submit</button>`,
})
export class AppComponent {
  title = 'My First Angular App!';
  imageUrl = "https://www.w3schools.com/html/pic_mountain.jpg";
}
