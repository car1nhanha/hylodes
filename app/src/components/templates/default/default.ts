import { Component } from '@angular/core';
import { Navbar } from '../../organisms/navbar/navbar';

@Component({
  selector: 'template-default',
  imports: [Navbar],
  templateUrl: './default.html',
  styleUrl: './default.scss',
})
export class Default {}
