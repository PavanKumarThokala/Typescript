import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent} from './courses.component'


import { AppComponent } from './app.component';
import { CouseComponent } from './couse/couse.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CouseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
