import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartEventComponent } from './chart-event/chart-event.component';
import { ChartDrilldownComponent } from './chart-drilldown/chart-drilldown.component';
import { ChartBasicComponent } from './chart-basic/chart-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartEventComponent,
    ChartDrilldownComponent,
    ChartBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
