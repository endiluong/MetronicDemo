import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Sub Modules
import { PartialsModule } from '@app/shared/components/partials/partials.module';
import { ListTimelineModule, WidgetChartsModule } from '@app/shared/components/partials';

// Components
import { DashboardComponent } from './dashboard.component';

// Routing
import { DashboardRoutingModule } from './dashboard.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ListTimelineModule,

    WidgetChartsModule,
    PartialsModule,

    DashboardRoutingModule
  ],
  providers: [],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
