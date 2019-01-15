import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Sub Modules
import { LayoutModule } from '@app/shell/layout/layout.module';
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

    LayoutModule,
    WidgetChartsModule,
    PartialsModule,

    DashboardRoutingModule
  ],
  providers: [],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
