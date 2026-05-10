import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronsUpDown } from '@ng-icons/lucide';

export interface Option {
  title: string;
  id: string;
}
@Component({
  selector: 'atom-select',
  imports: [NgIcon],
  templateUrl: './select.html',
  styleUrl: './select.scss',
  viewProviders: [provideIcons({ lucideChevronsUpDown })],
})
export class Select {
  optionSelected = 'select';
  isOpen: 'open' | 'close' = 'close';

  @Input('options') options!: Option[];
  @Input('text-default') textDefault!: string;

  change(option: Option) {
    this.optionSelected = option.title;
    this.isOpen = 'close';
  }

  open() {
    this.isOpen = this.isOpen === 'open' ? 'close' : 'open';
  }
}
