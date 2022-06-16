import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from "./components/admin/registration/registration.component";
import {HomeComponent} from "./shared/home/home.component";
import {NewsComponent} from "./shared/news/news.component";
import {CalendarComponent} from "./shared/calendar/calendar.component";
import {DressageComponent} from "./components/admin/dressage/dressage.component";
import {ShowjumpingComponent} from "./components/admin/showjumping/showjumping.component";


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
  },
  {
    path: 'showjumping',
    component: ShowjumpingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
