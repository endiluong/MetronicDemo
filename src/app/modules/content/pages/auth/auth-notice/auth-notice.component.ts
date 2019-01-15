import { Component, OnInit, Output } from '@angular/core';

import { AuthNoticeService, AuthNotice } from '@app/core/authentication';






@Component({
  // tslint:disable-next-line:component-selector
  selector: 'm-auth-notice',
  templateUrl: './auth-notice.component.html',
  styleUrls: ['./auth-notice.component.scss']
})
export class AuthNoticeComponent implements OnInit {
  @Output() type: any;
  @Output() message: any = '';

  constructor(public authNoticeService: AuthNoticeService) {}

  ngOnInit() {
    this.authNoticeService.onNoticeChanged$.subscribe((notice: AuthNotice) => {
      this.message = notice.message;
      this.type = notice.type;
    });
  }
}
