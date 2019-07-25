import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoedeDoelRoutingModule } from './goede-doel-routing.module';
import {GoedeDoelComponent} from './goede-doel.component';

@NgModule({
  declarations: [GoedeDoelComponent],
  imports: [
    CommonModule,
    GoedeDoelRoutingModule
  ]
})
export class GoedeDoelModule { }
