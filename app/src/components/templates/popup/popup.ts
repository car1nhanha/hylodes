import { Component, Input } from '@angular/core';

@Component({
  selector: 'template-popup',
  imports: [],
  templateUrl: './popup.html',
  styleUrl: './popup.scss',
})
export class Popup {
  @Input() isActivate = false;
  @Input() center = true;
}
