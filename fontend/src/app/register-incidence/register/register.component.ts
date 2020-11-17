import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';
import Heatmap from 'ol/layer/Heatmap';
import LayerGroup from 'ol/layer/Group';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderMap();
  }

  renderMap(){
    const satelliteTileUrl = "http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}";
      

    var map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({url: satelliteTileUrl})
        })
      ],
        
      view: new View({
        center: olProj.fromLonLat([89.637773,27.473336]),
        zoom: 13
      })
    });


    
    }

 
    
}
