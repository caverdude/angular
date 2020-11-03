import { Component } from "@angular/core";

@Component({
  selector: 'rating',
  template:`
    <ng-container *ngIf="rating <1; else elseBlock"><star></star></ng-container>
    <ng-template #elseBlock><starfill></starfill></ng-template>
  `
})

export class RatingComponent{
  rating = 0;
  onClick(ratingValue){
    this.rating=ratingValue;
  }
}
