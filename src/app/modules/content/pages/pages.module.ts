import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Vendors
import { AngularEditorModule } from '@kolkov/angular-editor';

// Sub Modules
import { SharedModule } from '@app/shared';
import { PartialsModule } from '../partials/partials.module';
import { LayoutModule } from '../layout/layout.module';

// Components
import { PagesComponent } from './pages.component';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import { InnerComponent } from './components/inner/inner.component';
import { ActionComponent } from './header/action/action.component';
import { ProfileComponent } from './header/profile/profile.component';

// Routing
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [PagesComponent, ActionComponent, ProfileComponent, ErrorPageComponent, InnerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    PagesRoutingModule,
    LayoutModule,
    PartialsModule,
    AngularEditorModule,

    SharedModule
  ],
  providers: []
})
export class PagesModule {}
