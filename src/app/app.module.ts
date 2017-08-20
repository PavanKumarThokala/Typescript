import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent} from './courses.component'

import { AppComponent } from './app.component';
import { CouseComponent } from './couse/couse.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CouseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
