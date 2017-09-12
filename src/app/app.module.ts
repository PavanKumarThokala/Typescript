import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './star/star.component';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent} from './courses.component'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CouseComponent } from './couse/couse.component';
import { Assin3Component } from './assin3/assin3.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CouseComponent,
    AuthorsComponent,
    StarComponent,
    Assin3Component,
    SummaryPipe,
    PanelComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
