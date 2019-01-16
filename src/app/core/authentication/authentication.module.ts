import { NgModule } from '@angular/core';
import { AUTH_SERVICE, AuthModule, PROTECTED_FALLBACK_PAGE_URI, PUBLIC_FALLBACK_PAGE_URI } from 'ngx-auth';


import { AuthenticationService, TokenStorage, AuthenticationGuard } from '.';



export function factory(authenticationService: AuthenticationService) {
  return authenticationService;
}

@NgModule({
  providers: [
    TokenStorage,
    AuthenticationService,
    AuthenticationGuard,
    { provide: PROTECTED_FALLBACK_PAGE_URI, useValue: '/' },
    { provide: PUBLIC_FALLBACK_PAGE_URI, useValue: '/login' },
    {
      provide: AUTH_SERVICE,
      deps: [AuthenticationService],
      useFactory: factory
    }
  ]
})
export class AuthenticationModule {}
