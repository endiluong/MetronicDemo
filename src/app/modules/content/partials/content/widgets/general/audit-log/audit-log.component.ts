import { Component, OnInit } from '@angular/core';
import { LogsService } from '@app/shared';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'm-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent implements OnInit {
  logList: any;
  logList2: any;
  logList3: any;

  constructor(private logsService: LogsService) {}

  ngOnInit() {
    // call logs to http api
    // this.logList = this.logsService.getData();
    // this.logList2 = this.logsService.getData({ types: 'event' });
    // this.logList3 = this.logsService.getData({ types: 'alert' });
  }
}
