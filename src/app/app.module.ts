import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import {AppRoutingModule} from './app.routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user/user.service';
import {LoginComponent} from './login/login.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppInterceptor} from './app.interceptor';
import {TokenStorage} from './storage/token.storage';
import {AuthService} from './auth/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ColumnFilterPipe} from './user/filter-pipes/column-filter.pipe';
import { PoemsGalleryComponent } from './poems-gallery/poems-gallery.component';
import {PoemService} from './poems-gallery/poem-service/poem-service';
import { PoemDisplayComponent } from './poems-gallery/poem-display/poem-display.component';
import { WelcomeGalleryComponent } from './poems-gallery/welcome-gallery/welcome-gallery.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { WelcomeInfoComponent } from './personal-info/welcome-info/welcome-info.component';
import { CurriculumVitaeComponent } from './personal-info/curriculum-vitae/curriculum-vitae.component';
import { ExternalInfoLinksComponent } from './personal-info/external-info-links/external-info-links.component';
import { WhoamiComponent } from './personal-info/whoami/whoami.component';
import { AuditComponent } from './audit/audit.component';
import {AuditService} from './audit/audit.service';
import { AuditPipePipe } from './audit/audit-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    LoginComponent,
    NavbarComponent,
    ColumnFilterPipe,
    PoemsGalleryComponent,
    PoemDisplayComponent,
    WelcomeGalleryComponent,
    PersonalInfoComponent,
    WelcomeInfoComponent,
    CurriculumVitaeComponent,
    ExternalInfoLinksComponent,
    WhoamiComponent,
    AuditComponent,
    AuditPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [
    UserService,
    PoemService,
    TokenStorage,
    AuthService,
    AuditService,
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
