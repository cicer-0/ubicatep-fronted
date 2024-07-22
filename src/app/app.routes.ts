import { Routes } from '@angular/router';
import { homeRoutes } from './features/home/routes';
import { propertyRoutes } from './features/property/routes';
export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    children: homeRoutes,
  },
  {
    path: 'property',
    children: propertyRoutes,
  },
  { path: '**', redirectTo: 'auth/login' },
];
