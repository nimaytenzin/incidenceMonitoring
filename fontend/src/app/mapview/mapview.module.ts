import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";


import { MapviewRoutingModule } from './mapview-routing.module';
import { MapComponent } from './map/map.component';
import { MapviewComponent } from './mapview.component';
import {} from './map/map.component';
import { Route } from '@angular/compiler/src/core';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Map",
      urls : [{title: "Map", url: '/map'}, {title: "Map"}]
    }, component:MapviewComponent
  }
]

@NgModule({
  declarations: [MapviewComponent, MapComponent],
  imports: [
    CommonModule,
    MapviewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MapviewModule { }
