import { Component } from '@angular/core';
import {ProductService} from "./product.service";

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1> <img src="{{imageUrl}}">`,
  providers: [ProductService]
})
export class AppComponent {
  title = 'My First Angular App!';
  imageUrl = "https://www.w3schools.com/html/pic_mountain.jpg";
}
