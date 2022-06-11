import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from "./components/admin/registration/registration.component";
import {HomeComponent} from "./shared/home/home.component";
import {NewsComponent} from "./shared/news/news.component";
import {CreatecompetitionComponent} from "./components/admin/createcompetition/createcompetition.component";
import {CalendarComponent} from "./shared/calendar/calendar.component";
import {DressageComponent} from "./components/admin/dressage/dressage.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'createcompetition',
    component: CreatecompetitionComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'dressage',
    component: DressageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
