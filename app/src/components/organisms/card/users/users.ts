import { Component } from '@angular/core';

@Component({
  selector: 'card-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class CardUsers {
  user = {
    id: 'abcd',
    name: 'lucas carinhanha',
    email: 'lucascarinhanha4@gmail.com',
  };
}
