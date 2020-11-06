import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-root',
  template: `<h1>Hello</h1>`
})
export class AppComponent {
  constructor(private afs: AngularFirestore ){
    console.log(afs);
  }
}
