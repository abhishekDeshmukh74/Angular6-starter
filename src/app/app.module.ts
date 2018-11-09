import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { appRoutes } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from '../common/directives/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from '../common/directives/alert/alert.component';
import { HeaderComponent } from '../common/directives/header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

// Services
import { fakeBackendProvider } from '../common/helpers/fake-backend';
import { AuthGuard } from '../common/guards/auth.guard';
import { ErrorInterceptor } from '../common/helpers/error-intercepter';
import { JwtInterceptor } from '../common/helpers/jwt-interceptor';
import { AlertService } from '../common/services/alert.service';
import { AuthenticationService } from '../common/services/authentication.service';
import { UserService } from '../common/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    AlertComponent,
    HeaderComponent,
    NotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
