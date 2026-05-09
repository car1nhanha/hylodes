import { Component, HostBinding, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'atom-tag',
  imports: [NgIcon],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class Tag {
  @Input('iconName') iconName!: string;
  @Input('color') color!: string;
  @Input('number') number!: string;

  @HostBinding('style.background-color') get bgColor(): string {
    return this.color;
  }
}
