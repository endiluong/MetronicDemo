import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Sub Modules
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ShellModule } from './shell/shell.module';

// Components
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './app.routing';

// Vendors
import { NgxPermissionsModule } from 'ngx-permissions';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressSpinnerModule } from '@angular/material';

import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';
import { environment } from '@env/environment';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript}
  ];
}


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // Routing
    AppRoutingModule, // must be imported as the last module as it contains the fallback route

    CoreModule,
    SharedModule,
    ShellModule,

    // Vendors
    TranslateModule.forRoot(),
    NgbModule,
    OverlayModule,
    NgxPermissionsModule.forRoot(),
    NgbModule.forRoot(),
    MatProgressSpinnerModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })

  ],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
