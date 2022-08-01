import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserComponent } from './components/user/user.component';
import {AvatarComponent} from "./components/avatar/avatar.component";
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageComponent } from './components/message/message.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    ChatComponent,
    MenuComponent,
    UserComponent,
    AvatarComponent,
    ChatContainerComponent,
    HeaderComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
