import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { DurationPipe } from './pipes/duration.pipe';

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
  imports: [CommonModule, FontAwesomeModule],
  exports: [COMPONENTS, PIPES, CommonModule],
})
export class SharedModule {}
