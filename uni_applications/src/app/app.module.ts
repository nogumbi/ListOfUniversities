import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
