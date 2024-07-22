import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';

export const propertyRoutes: Routes = [
  {
    path: '',
    component: PropertyDetailsComponent,
    canActivate: [AuthGuard],
  },
];
