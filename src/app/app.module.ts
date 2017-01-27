import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MembersListComponent } from './members-list/members-list.component';
import { AboutComponent } from './about/about.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MembersListComponent,
    AboutComponent,
    MemberDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
