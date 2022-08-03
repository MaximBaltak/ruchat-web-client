import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./pages/auth/auth.component";
import {ChatComponent} from "./pages/chat/chat.component";
import {NewsComponent} from "./pages/news/news.component";
import {AdminComponent} from "./pages/admin/admin.component";

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'news', component: NewsComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
