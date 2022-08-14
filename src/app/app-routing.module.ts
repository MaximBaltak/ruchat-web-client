import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./pages/auth/auth.component";
import {ChatComponent} from "./pages/chat/chat.component";
import {NewsComponent} from "./pages/news/news.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {ConfirmComponent} from "./pages/confirm/confirm.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {ControlContentComponent} from "./pages/admin/components/control-content/control-content.component";
import {ControlUsersComponent} from "./pages/admin/components/control-users/control-users.component";
import {ControlNewsComponent} from "./pages/admin/components/control-news/control-news.component";
import {ProfileComponent} from "./pages/settings/components/profile/profile.component";
import {BackgroundChangeComponent} from "./pages/settings/components/background-change/background-change.component";

const childrenAdminRoutes: Routes = [
  {path: 'users', component: ControlUsersComponent},
  {path: 'content', component: ControlContentComponent},
  {path: 'news', component: ControlNewsComponent},
]
const childrenSettingsRoutes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'background', component: BackgroundChangeComponent},
]
const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'user/:id', component: ChatComponent},
  {path: 'news', component: NewsComponent},
  {path: 'admin', component: AdminComponent, children: childrenAdminRoutes},
  {path: 'settings', component: SettingsComponent, children: childrenSettingsRoutes},
  {path: 'confirm', component: ConfirmComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
