import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParticipantListComponent} from './participant-list/participant-list.component';
import {ParticipantEditComponent} from './participant-edit/participant-edit.component';
import {GuardGuard} from '../admin/guard.guard';

const routes: Routes = [
  {
    path: '',
    component: ParticipantListComponent,
    children: [
      {
        path: 'new',
        component: ParticipantEditComponent,
        canActivate: [GuardGuard]
      },
      {
        path: ':id',
        component: ParticipantEditComponent,
        canActivate: [GuardGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantRoutingModule {
}
