import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

export  interface ReusableModalConfig {
  heading: string;
  primaryBtnName?: string;
  secondaryBtnName?: string;
}
@Component({
  selector: 'app-reusable-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-modal.component.html',
  styleUrl: './reusable-modal.component.scss'
})

export class ReusableModalComponent {
  @Input() config: any;
  @Output() closeEvent = new EventEmitter<void>();
  @Output() submitEvent = new EventEmitter<void>();

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'modal-open'); // Disable scroll when modal opens
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open'); // Enable scroll when modal closes
  }

  handleClose() {
    this.closeEvent.emit();
  }

  handleSubmit() {
    this.submitEvent.emit();
  }

}
