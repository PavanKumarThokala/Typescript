import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
isTrue: boolean;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isTrue = !this.isTrue;
  }
}
