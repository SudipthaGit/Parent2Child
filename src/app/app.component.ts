import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COURSES } from '../models/db.data';
import { CourseCardComponent } from "./course-card/course-card.component";
import { StudentComponent } from "./student/student.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CompInt';
  public CourseLst=COURSES;
  public FirstCourse=COURSES[0];
}
