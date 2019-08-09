import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {GuardGuard} from './admin/guard.guard';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'participant',
    loadChildren: './participant/participant.module#ParticipantModule'
  },
  {
    path: 'sponsor',
    loadChildren: './sponsor/sponsor.module#SponsorModule',
  },
  {
    path: 'goedeDoelen',
    loadChildren: './goede-doel/goede-doel.module#GoedeDoelModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
