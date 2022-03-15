import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { coursesCards } from '../../../../mock';
import { ICourseCard } from '../../courses.model';

// const messagesMap: { [key: string]: string } = {
//   remove: 'Are you sure that you want to remove this course ?',
// };

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {
  @ViewChild('windowModal') windowModal?: ElementRef<any>;

  @Input() courses: ICourseCard[] = coursesCards;
  @Input() isCoursesEditable: boolean = true;

  @Output() showCourse = new EventEmitter<string>();
  @Output() editCourse = new EventEmitter<string>();
  @Output() removeCourse = new EventEmitter<string>();

  public showModalWindow = false;

  constructor() {}

  ngOnInit(): void {}

  public onEdit(): void {
    this.editCourse.emit('id');
  }

  public onRemove(): void {
    this.showModalWindow = true;
  }

  public onShow(): void {
    this.showCourse.emit('id');
  }

  public onDo(event: boolean): void {
    this.showModalWindow = false;
    if (event) {
      this.removeCourse.emit('id');
    }
  }
}