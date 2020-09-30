import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartDrilldownComponent } from './chart-drilldown/chart-drilldown.component';
import { ChartEventComponent } from './chart-event/chart-event.component';
import { ChartBasicComponent } from './chart-basic/chart-basic.component';

const routes: Routes = [
  {path:'drilldown', component:ChartDrilldownComponent},
  {path:'event_trigger', component:ChartEventComponent},
  {path:'chart_basic', component:ChartBasicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
