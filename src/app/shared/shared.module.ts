import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IconsModule } from './icons/icons.module';
import { DurationPipe } from './pipes';
import {
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  ModalWindowComponent,
} from './components';

const COMPONENTS = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  ModalWindowComponent,
];

const PIPES = [DurationPipe];

@NgModule({
  declarations: [COMPONENTS, PIPES],
  imports: [CommonModule, FontAwesomeModule, IconsModule],
  exports: [COMPONENTS, PIPES, CommonModule],
})
export class SharedModule {}
