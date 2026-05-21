import { Routes } from '@angular/router';
import { Login } from '../components/pages/auth/login/login';
import { Register } from '../components/pages/auth/register/register';
import { Ideas } from '../components/pages/ideas/ideas';
import { Users } from '../components/pages/users/users';

export const routes: Routes = [
  { path: '', component: Ideas },
  { path: 'ideas', component: Ideas },
  { path: 'users', component: Users },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
];
