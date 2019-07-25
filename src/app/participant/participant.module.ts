import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ParticipantRoutingModule} from './participant-routing.module';
import {ParticipantComponent} from './participant.component';
import {ParticipantListComponent} from './participant-list/participant-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ParticipantItemComponent} from './participant-list/participant-item/participant-item.component';
import {ParticipantEditComponent} from './participant-edit/participant-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ParticipantDetailComponent} from './participant-detail/participant-detail.component';
import {SponsorAddComponent} from '../sponsor/sponsor-add/sponsor-add.component';

@NgModule({
  declarations: [
    ParticipantComponent,
    ParticipantListComponent,
    ParticipantItemComponent,
    ParticipantEditComponent,
    ParticipantDetailComponent,

  ],
  imports: [
    CommonModule,
    ParticipantRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  entryComponents: [
    ParticipantEditComponent,
    ParticipantDetailComponent,

  ]
})
export class ParticipantModule {
}
