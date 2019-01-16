import { Routes, Route } from '@angular/router';

import { ShellComponent } from './shell.component';
import { AuthenticationGuard } from '@app/core/authentication';
import { NgxPermissionsGuard } from 'ngx-permissions';

/**
 * Provides helper methods to create routes.
 */
export class Shell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,

      // remove comment to disable login
      // canActivate: [NgxPermissionsGuard],
      // or
      // canActivate: [AuthenticationGuard],

      // Reuse ShellComponent instance when navigating between child views
      data: {
        // reuse: true,
        permissions: {
          only: ['ADMIN', 'USER'],
          except: ['GUEST'],
          redirectTo: '/login'
        }
      }
    };
  }
}
