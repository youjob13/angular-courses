import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalWindowComponent implements OnInit {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() okButtonText: string = 'Ok';
  @Input() cancelButtonText: string = 'Cancel';

  @Output() do = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onClose(): void {
    this.do.emit(false);
  }

  onOk(): void {
    this.do.emit(true);
  }

  onCancel(): void {
    this.do.emit(false);
  }
}
