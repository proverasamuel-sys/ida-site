import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrganigramaComponent } from './pages/organigrama/organigrama.component';
import { SobreMinisterioComponent } from './pages/sobre-ministerio/sobre-ministerio.component';
import { PerfilTitularComponent } from './pages/perfil-titular/perfil-titular.component';
import { ProgramasComponent } from './pages/programas/programas.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'organigrama',
    component: OrganigramaComponent
  },
  {
    path: 'sobre-ministerio',
    component: SobreMinisterioComponent
  },
  {
    path: 'perfil-titular',
    component: PerfilTitularComponent
  },
  {
    path: 'programas',
    component: ProgramasComponent
  }
];
