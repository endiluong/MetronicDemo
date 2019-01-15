import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

/* Remove comment to apply Shell
const routes: Routes = [
  Shell.childRoutes([{ path: '', loadChildren: 'app/modules/content/pages/pages.module#PagesModule' }]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];
*/

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/content/pages/pages.module#PagesModule'
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
