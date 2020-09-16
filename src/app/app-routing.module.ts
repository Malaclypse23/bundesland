import { RouterModule, Routes } from '@angular/router';

import { BundeslandDetailComponent } from './bundesland-detail/bundesland-detail.component';
import { BundeslandListComponent } from './bundesland-list/bundesland-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: ':url', component: BundeslandDetailComponent, pathMatch: 'full'},
  { path: '', component: BundeslandListComponent, pathMatch: 'full'},
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
