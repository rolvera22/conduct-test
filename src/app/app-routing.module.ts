import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from  './home/home.component';
import { ViewerComponent } from './viewer/viewer.component';

const routes: Routes = [
  { path:'home',
    component: HomeComponent
  },
  {
    path:'viewer',
    component: ViewerComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
