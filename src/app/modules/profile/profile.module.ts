import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Vendors
import { AngularEditorModule } from '@kolkov/angular-editor';

// Sub Modules
import { SharedModule } from '@app/shared';
import { PartialsModule } from '@app/shared/components/partials/partials.module';

// Components
import { ProfileComponent } from './profile.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule,

    PartialsModule,

    SharedModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
