import {RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from './user/add-user/add-user.component';
import {UserComponent} from './user/user.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {AdminGuard} from './auth/admin/admin.guard';
import {PoemsGalleryComponent} from './poems-gallery/poems-gallery.component';
import {PoemDisplayComponent} from './poems-gallery/poem-display/poem-display.component';
import {WelcomeGalleryComponent} from './poems-gallery/welcome-gallery/welcome-gallery.component';
import {PersonalInfoComponent} from './personal-info/personal-info.component';
import {WelcomeInfoComponent} from './personal-info/welcome-info/welcome-info.component';
import {CurriculumVitaeComponent} from './personal-info/curriculum-vitae/curriculum-vitae.component';
import {ExternalInfoLinksComponent} from './personal-info/external-info-links/external-info-links.component';
import {WhoamiComponent} from './personal-info/whoami/whoami.component';

const routes: Routes = [
  { path: 'users', component: UserComponent, canActivate: [AdminGuard] },
  { path: 'add', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'poems', component: PoemsGalleryComponent, children: [
      {path: '', component: WelcomeGalleryComponent},
      {path: ':name', component: PoemDisplayComponent}
    ]
  },
  { path: 'personal', component: PersonalInfoComponent, children: [
      {path: '', component: WelcomeInfoComponent},
      {path: 'cv', component: CurriculumVitaeComponent},
      {path: 'links', component: ExternalInfoLinksComponent},
      {path: 'whoami', component: WhoamiComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard, AdminGuard]
})
export class AppRoutingModule { }
