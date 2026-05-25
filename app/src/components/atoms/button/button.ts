import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() size: 'normal' | 'full' = 'normal';
  @Input() variant: 'primary' | 'outline' = 'primary';
  @Output() action = new EventEmitter<void>();
}
