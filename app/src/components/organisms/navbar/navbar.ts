import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLightbulb, lucideLogOut, lucideUsers } from '@ng-icons/lucide';

@Component({
  selector: 'organism-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  viewProviders: [provideIcons({ lucideLightbulb, lucideUsers, lucideLogOut })],
})
export class Navbar {
  private router = inject(Router);

  user = {
    id: 'abcd',
    name: 'lucas carinhanha',
    email: 'lucascarinhanha4@gmail.com',
  };
  actualPage = '';

  constructor(private r: Router) {
    // define página atual na inicialização
    this.setActualPageFromUrl(this.r.url);

    // atualiza quando a rota muda
    this.r.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActualPageFromUrl(event.urlAfterRedirects);
      }
    });
  }

  private setActualPageFromUrl(url: string) {
    const parts = url.split('/').filter(Boolean);
    this.actualPage = parts[0] ?? '';
  }

  isActive(page: string) {
    return this.actualPage === page;
  }

  goToIdeas() {
    this.router.navigate(['ideas']);
  }

  goToUsers() {
    this.router.navigate(['users']);
  }
}
