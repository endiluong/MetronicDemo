import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Vendors
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {
  MatInputModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatProgressBarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatTooltipModule
} from '@angular/material';


// Sub Modules
import { SharedModule } from '@app/shared';
import { MessengerModule } from './layout/quick-sidebar/messenger/messenger.module';
import { ListTimelineModule } from './layout/quick-sidebar/list-timeline/list-timeline.module';
import { PortletModule } from './content/general/portlet/portlet.module';
import { SpinnerButtonModule } from './content/general/spinner-button/spinner-button.module';
import { WidgetChartsModule } from './content/widgets/charts/widget-charts.module';


// Components
import { QuickSidebarComponent } from './layout/quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './layout/scroll-top/scroll-top.component';
import { TooltipsComponent } from './layout/tooltips/tooltips.component';
import { ListSettingsComponent } from './layout/quick-sidebar/list-settings/list-settings.component';
import { NoticeComponent } from './content/general/notice/notice.component';
import { BlogComponent } from './content/widgets/general/blog/blog.component';
import { FinanceStatsComponent } from './content/widgets/general/finance-stats/finance-stats.component';
import { PackagesComponent } from './content/widgets/general/packages/packages.component';
import { TasksComponent } from './content/widgets/general/tasks/tasks.component';
import { SupportTicketsComponent } from './content/widgets/general/support-tickets/support-tickets.component';
import { RecentActivitiesComponent } from './content/widgets/general/recent-activities/recent-activities.component';
import { AuditLogComponent } from './content/widgets/general/audit-log/audit-log.component';
import { BestSellerComponent } from './content/widgets/general/best-seller/best-seller.component';
import { AuthorProfitComponent } from './content/widgets/general/author-profit/author-profit.component';
import { DataTableComponent } from './content/widgets/general/data-table/data-table.component';
import { StatComponent } from './content/widgets/general/stat/stat.component';
// tslint:disable-next-line:max-line-length
import { RecentNotificationsComponent } from './content/widgets/general/recent-notifications/recent-notifications.component';



@NgModule({
  declarations: [
    QuickSidebarComponent,
    ScrollTopComponent,
    TooltipsComponent,
    ListSettingsComponent,
    NoticeComponent,
    BlogComponent,
    FinanceStatsComponent,
    PackagesComponent,
    TasksComponent,
    SupportTicketsComponent,
    RecentActivitiesComponent,
    RecentNotificationsComponent,
    AuditLogComponent,
    BestSellerComponent,
    AuthorProfitComponent,
    DataTableComponent,
    StatComponent
  ],
  exports: [
    QuickSidebarComponent,
    ScrollTopComponent,
    TooltipsComponent,
    ListSettingsComponent,
    NoticeComponent,
    BlogComponent,
    FinanceStatsComponent,
    PackagesComponent,
    TasksComponent,
    SupportTicketsComponent,
    RecentActivitiesComponent,
    RecentNotificationsComponent,
    AuditLogComponent,
    BestSellerComponent,
    AuthorProfitComponent,
    DataTableComponent,
    StatComponent,

    PortletModule,
    SpinnerButtonModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    PerfectScrollbarModule,
    MessengerModule,
    ListTimelineModule,
    PortletModule,
    SpinnerButtonModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
    WidgetChartsModule,

    SharedModule
  ]
})
export class PartialsModule {}
