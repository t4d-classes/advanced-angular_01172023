import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'color-tool',
    loadChildren: () => import('color-tool/Module').then(m => m.AppModule),
  },
  {
    path: 'car-tool',
    loadChildren: () => import('car-tool/Module').then(m => m.AppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
