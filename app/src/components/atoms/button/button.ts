import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() size: 'normal' | 'full' = 'normal';
  @Input() variant: 'primary' | 'outline' = 'primary';
}
