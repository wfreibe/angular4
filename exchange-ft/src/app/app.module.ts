import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { UserStoreService } from './shared/user-store.service';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AuthService} from './auth/auth.service';
import { CallbackComponent } from './callback.component';
import { ProfileComponent } from './profile/profile.component';
import {OrganizationStoreService} from './shared/organization-store.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    CallbackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserStoreService,
    OrganizationStoreService,
    { provide: LOCALE_ID, useValue: 'de'},
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
