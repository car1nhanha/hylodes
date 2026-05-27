import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCrown, lucidePlus, lucideUser } from '@ng-icons/lucide';
import { Button } from '../../atoms/button/button';
import { Separator } from '../../atoms/separator/separator';
import { Tag } from '../../atoms/tag/tag';
import { Title } from '../../atoms/title/title';
import { MoleculeInput } from '../../molecules/input/input';
import { OrganismPopup } from '../../organisms/card/popup/popup';
import { CardUsers } from '../../organisms/card/users/users';
import { Default } from '../../templates/default/default';
import { Popup } from '../../templates/popup/popup';

@Component({
  selector: 'app-users',
  imports: [
    Default,
    Title,
    Tag,
    MoleculeInput,
    Separator,
    Button,
    NgIcon,
    CardUsers,
    Popup,
    OrganismPopup,
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  viewProviders: [provideIcons({ lucideCrown, lucideUser, lucidePlus })],
})
export class Users {
  isOpenNewUser = false;

  save() {
    alert('is saving');
  }
  close() {
    this.isOpenNewUser = false;
  }

  openCreatePopup() {
    this.isOpenNewUser = true;
  }
  closeCreatePopup() {
    this.isOpenNewUser = true;
  }
}
