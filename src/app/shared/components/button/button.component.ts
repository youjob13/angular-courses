import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  faPen,
  faTrash,
  faCross,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

const fontAwesomeIcons: Record<string, IconDefinition> = {
  edit: faPen,
  remove: faTrash,
  close: faCross,
};

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() iconName: string = '';

  public icons = fontAwesomeIcons;

  constructor() {}

  ngOnInit(): void {}
}
