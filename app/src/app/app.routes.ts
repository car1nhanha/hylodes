import { Routes } from '@angular/router';
import { Login } from '../components/pages/auth/login/login';
import { Ideas } from '../components/pages/ideas/ideas';

export const routes: Routes = [
  { path: '', component: Ideas },
  { path: 'login', component: Login },
];
