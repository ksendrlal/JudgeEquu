import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './components/admin/registration/registration.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { NewsComponent } from './shared/news/news.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { PostCardComponent } from './shared/news/post-card/post-card.component';
import { AddpostComponent } from './components/admin/addpost/addpost.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { AddcompetitionComponent } from './components/admin/addcompetition/addcompetition.component';
import { CardCompetitionComponent } from './shared/calendar/card-competition/card-competition.component';
import { ShowjumpingComponent } from './components/admin/showjumping/showjumping.component';
import { DressageComponent } from './components/admin/dressage/dressage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    PostCardComponent,
    AddpostComponent,
    CalendarComponent,
    AddcompetitionComponent,
    CardCompetitionComponent,
    ShowjumpingComponent,
    DressageComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        ReactiveFormsModule,
      AppRoutingModule,
      CommonModule,
      FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
