
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
{ path: '',
component: AppComponent,
children: [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
