import { Routes, RouterModule } from '@angular/router';
import { CandidatosComponent } from './components/candidatos/candidatos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/candidatos', pathMatch: 'full' },
  { path: 'candidatos', component: CandidatosComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
