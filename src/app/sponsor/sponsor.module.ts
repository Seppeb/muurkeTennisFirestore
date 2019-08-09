import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SponsorRoutingModule} from './sponsor-routing.module';
import {SponsorComponent} from './sponsor.component';
import {SponsorListComponent} from './sponsor-list/sponsor-list.component';
import {SponsorItemComponent} from './sponsor-list/sponsor-item/sponsor-item.component';
import {FormsModule} from '@angular/forms';
import { SponsorEditComponent } from './sponsor-edit/sponsor-edit.component';
import { SponsorDetailComponent } from './sponsor-detail/sponsor-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SponsorComponent, SponsorListComponent, SponsorItemComponent, SponsorEditComponent, SponsorDetailComponent],
  imports: [
    CommonModule,
    SponsorRoutingModule,
    FormsModule,
    NgbModule
    ]
})
export class SponsorModule {
}
