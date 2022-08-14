import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserComponent } from './components/user/user.component';
import {AvatarComponent} from "./components/avatar/avatar.component";
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageComponent } from './pages/chat/components/message/message.component';
import { NewsComponent } from './pages/news/news.component';
import { HeaderNewsComponent } from './pages/news/components/header-news/header-news.component';
import { MessageAdminComponent } from './pages/news/components/message-admin/message-admin.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NavigationAdminComponent } from './pages/admin/components/navigation-admin/navigation-admin.component';
import { ControlContentComponent } from './pages/admin/components/control-content/control-content.component';
import { ControlUsersComponent } from './pages/admin/components/control-users/control-users.component';
import { ControlNewsComponent } from './pages/admin/components/control-news/control-news.component';
import { InfoModalComponent } from './modal/info-modal/info-modal.component';
import { SettingsModalComponent } from './modal/settings-modal/settings-modal.component';
import { EmailModalComponent } from './modal/email-modal/email-modal.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { ProfileComponent } from './pages/settings/components/profile/profile.component';
import { BackgroundChangeComponent } from './pages/settings/components/background-change/background-change.component';
import { NewPaswordComponent } from './pages/confirm/components/new-pasword/new-pasword.component';
import { ConfirmedComponent } from './pages/confirm/components/confirmed/confirmed.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonsControlComponent } from './components/buttons-control/buttons-control.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ChatComponent,
    MenuComponent,
    UserComponent,
    AvatarComponent,
    ChatContainerComponent,
    HeaderComponent,
    MessageComponent,
    NewsComponent,
    HeaderNewsComponent,
    MessageAdminComponent,
    AdminComponent,
    NavigationAdminComponent,
    ControlContentComponent,
    ControlUsersComponent,
    ControlNewsComponent,
    InfoModalComponent,
    SettingsModalComponent,
    EmailModalComponent,
    SettingsComponent,
    ConfirmComponent,
    ProfileComponent,
    BackgroundChangeComponent,
    NewPaswordComponent,
    ConfirmedComponent,
    NotFoundComponent,
    ButtonsControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
