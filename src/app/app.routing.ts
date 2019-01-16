import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Services
import { Shell } from '@app/shell/shell.service';

// Components
import { ErrorPageComponent } from './shell/snippets/error-page/error-page.component';

/* Remove comment to apply Shell
const routes: Routes = [
  Shell.childRoutes([{ path: '', loadChildren: 'app/modules/content/pages/pages.module#PagesModule' }]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];
*/

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
    },
    {
      path: 'ecommerce',
      loadChildren: 'app/modules/apps/e-commerce/e-commerce.module#ECommerceModule'
    },
    {
      path: 'user-management',
      loadChildren: 'app/modules/user-management/user-management.module#UserManagementModule'
    },
    {
      path: 'audit-log',
      loadChildren: 'app/modules/apps/audit-log/audit-log.module#AuditLogModule'
    },
    {
      path: 'builder',
      loadChildren: 'app/modules/builder/builder.module#BuilderModule'
    },
    {
      path: 'header/actions',
      loadChildren: 'app/modules/action/action.module#ActionModule'
    },
    {
      path: 'profile',
      loadChildren: 'app/modules/profile/profile.module#ProfileModule'
    }
  ]),
  {
    path: 'login',
    // canActivate: [NgxPermissionsGuard],
    loadChildren: 'app/modules/auth/auth.module#AuthModule',
    data: {
      permissions: {
        except: 'ADMIN'
      }
    }
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
