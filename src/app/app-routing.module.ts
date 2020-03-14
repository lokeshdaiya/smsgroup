import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './stats/stats.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/stats', pathMatch: 'full'
  },
  {
    path: 'stats', component: StatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
