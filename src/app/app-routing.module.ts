import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./pages/auth/auth.component";
import {ChatComponent} from "./pages/chat/chat.component";
import {NewsComponent} from "./pages/news/news.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {ConfirmComponent} from "./pages/confirm/confirm.component";

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'news', component: NewsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'confirm', component: ConfirmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
