import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrganigramaComponent } from './pages/organigrama/organigrama.component';
import { SobreMinisterioComponent } from './pages/sobre-ministerio/sobre-ministerio.component';
import { PerfilTitularComponent } from './pages/perfil-titular/perfil-titular.component';
import { ProgramasComponent } from './pages/programas/programas.component';
import { ProjectosComponent } from './pages/projectos/projectos.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { EstatisticasDeProducaoComponent } from './pages/estatisticas-de-producao/estatisticas-de-producao.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { EventosAgroComponent } from './pages/eventos-agro/eventos-agro.component';
import { SobreIdaComponent } from './pages/sobre-ida/sobre-ida.component';


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
  }, 
  {
    path: 'projectos',
    component: ProjectosComponent
  },
  {
    path: 'parceiros',
    component:ParceirosComponent
  },
  {
    path: 'estatisticas-de-producao',
    component: EstatisticasDeProducaoComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  },
  {
    path: 'eventos-agro',
    component: EventosAgroComponent
  },
  {
    path: 'sobre-ida',
    component: SobreIdaComponent
  }
];
