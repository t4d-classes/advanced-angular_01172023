import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'color-tool',
    loadChildren: () => loadRemoteModule({ 
      type: 'manifest',
      remoteName: 'color-tool',
      exposedModule: './Module'
    }).then(m => m.AppModule),
  },
  {
    path: 'car-tool',
    loadChildren: () => loadRemoteModule({ 
      type: 'manifest',
      remoteName: 'car-tool',
      exposedModule: './Module'
    }).then(m => m.AppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
