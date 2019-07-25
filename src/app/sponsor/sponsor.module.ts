import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SponsorRoutingModule} from './sponsor-routing.module';
import {SponsorComponent} from './sponsor.component';
import {SponsorListComponent} from './sponsor-list/sponsor-list.component';
import {SponsorItemComponent} from './sponsor-list/sponsor-item/sponsor-item.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [SponsorComponent, SponsorListComponent, SponsorItemComponent],
  imports: [
    CommonModule,
    SponsorRoutingModule,
    FormsModule
    ]
})
export class SponsorModule {
}
