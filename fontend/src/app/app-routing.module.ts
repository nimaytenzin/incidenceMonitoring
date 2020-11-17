import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { RegisterIncidenceModule } from "./register-incidence/register-incidence.module";

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'map',
        loadChildren: ()=> import('./mapview/mapview.module').then(m=>m.MapviewModule)
      }
    ]
  },
  {
    path: 'register', 
    loadChildren: () => import('./register-incidence/register-incidence.module').then(m => m.RegisterIncidenceModule)
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
