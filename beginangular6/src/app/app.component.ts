import { Component } from '@angular/core';
import { GitHubService} from "./github.service";
import { filter, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="">Home</a> </li>
      <li><a routerLink="GitHub">GitHub</a> </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  providers: []
})
export class AppComponent {

  constructor() {

  }

}
