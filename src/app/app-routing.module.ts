import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlansComponent } from './plans/plans.component';

const routes: Routes = [
		{ path: '', redirectTo: '/plan', pathMatch: 'full'},
		{ path: 'plan', component: PlansComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
