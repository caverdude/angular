import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface GitHubUser {
  html_url: string;
  avatar_url: string;
  login: string;
  score: string;
}

export class GithubService{
  constructor(private _http: HttpClient) {

  }
  getGitHubData(_searchTerm):Observable<GitHubUser>{
    return this._http.get<GitHubUser>
    ("https://api.gethub.com/search/users?q="+_searchTerm);
  }
}
