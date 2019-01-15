import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Vendors
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { AuthNoticeComponent } from './auth-notice/auth-notice.component';

// Sub Modules
import { SpinnerButtonModule } from '@app/shared/components/partials';

// Components
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    TranslateModule.forChild(),
    SpinnerButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent
      }
    ])
  ],
  providers: [],
  declarations: [AuthComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, AuthNoticeComponent]
})
export class AuthModule {}
