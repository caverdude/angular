import { Component } from '@angular/core';
import { GitHubService} from "./github.service";
import { filter, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" routerLink="">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" routerLink="GitHub">GitHub<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" routerLink="Contact">Contact<span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers: []
})
export class AppComponent {

  constructor() {

  }

}
