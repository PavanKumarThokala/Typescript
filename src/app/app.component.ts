import { FavouriteChanged } from './star/star.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isTrue: false,
    likescount: 0 
  }

  onFavouriteChanged(eventArgs: FavouriteChanged){
    console.log('Favourite changed:', eventArgs);
  }
}
