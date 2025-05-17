import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  //Define a Input decorator which will recieve value from its parent component 
  @Input('dataFromParent') courseDtls:any;
}
