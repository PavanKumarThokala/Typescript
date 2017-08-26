import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <button (click)="onSave($event)" [style.backgroundColor]="isActive ? 'blue':'red'" class="btn btn-primary" [class.active]="isActive">Save</button>
        ` 
})
export class CoursesComponent{
    title = 'List of Courses'
    isActive = true;
    courses;
    
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    onSave($event){
        console.log("Button Clicked", $event);
    }

}