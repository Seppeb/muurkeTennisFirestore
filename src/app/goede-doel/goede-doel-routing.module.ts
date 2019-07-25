import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoedeDoelComponent} from './goede-doel.component';

const routes: Routes = [ {
  path: '',
  component: GoedeDoelComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoedeDoelRoutingModule { }
