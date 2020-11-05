import { Component } from '@angular/core';
import { GitHubService} from "./github.service";

@Component({
  selector: 'app-root',
  template: ` <div *ngIf="isLoading">Getting data...</div>
  `,
  providers: [GitHubService]
})
export class AppComponent {
  isLoading = true;
  constructor(private _githubService: GitHubService) {

  }
  ngOnInit(){
    this._githubService.getGitHubData('greg')
      .subscribe(data => {
        this.isLoading=false;
        console.log(data);
      });
  }
}
