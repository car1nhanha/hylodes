import { Component, EventEmitter, Output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { Button } from '../../../atoms/button/button';

@Component({
  selector: 'organism-popup',
  imports: [NgIcon, Button],
  templateUrl: './popup.html',
  styleUrl: './popup.scss',
  viewProviders: [provideIcons({ lucideX })],
})
export class OrganismPopup {
  @Output() action = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
}
