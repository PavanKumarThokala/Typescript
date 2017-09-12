import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'favourite',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StarComponent {
@Input('isTrue') isTrue: boolean;
@Output('change') change = new EventEmitter();
@Input('likescount') likescount : number
  onClick(){
    this.isTrue = !this.isTrue;
    this.change.emit({newValue: this.isTrue});
    if(this.isTrue){
      this.likescount +=1;
    }
    else{
      this.likescount -=1;
    }
  }
}
export interface FavouriteChanged{
  newValue: boolean
}
