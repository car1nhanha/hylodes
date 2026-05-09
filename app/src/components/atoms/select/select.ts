import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronsUpDown } from '@ng-icons/lucide';

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

  change(item: string) {
    this.optionSelected = item;
    this.isOpen = 'close';
  }

  open() {
    this.isOpen = this.isOpen === 'open' ? 'close' : 'open';
  }
}
