import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'molecule-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class MoleculeInput {
  @Input() label: string = '';
  type = input<'text' | 'email' | 'password'>('text');
  placeholder = input<string>('');
  disabled = input(false);
}
