import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as objectPath from 'object-path';

// Services
import { LayoutConfigService, SubheaderService } from '@app/shared';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'm-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  public config: any;

  constructor(
    private router: Router,
    private layoutConfigService: LayoutConfigService,
    private subheaderService: SubheaderService
  ) {}

  ngOnInit(): void {}
}
