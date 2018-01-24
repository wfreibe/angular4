import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppRoutingModule} from './app-routing.module';
import { DateValueAccessorModule} from 'angular-date-value-accessor';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserStoreService } from './shared/user-store.service';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent,
    UserDetailsComponent,
    HomeComponent,
    SearchComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    DateValueAccessorModule,
    ReactiveFormsModule
  ],
  providers: [UserStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
