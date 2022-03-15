import { NgModule } from '@angular/core';

import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseCardComponent } from './components/course-card/course-card.component';

@NgModule({
  declarations: [CoursesComponent, CourseListComponent, CourseCardComponent],
  imports: [SharedModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
