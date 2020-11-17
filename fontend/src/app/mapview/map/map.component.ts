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
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  
  constructor(private fb: FormBuilder) {  }

  layerSwitchForm: FormGroup | undefined;
  heatmap: any;
  subzone:any;
  
  layers = ['heatmap', 'Incidences by Subzone']; // define the layers here that will show up in the drop down

  ngOnInit(): void {
    this.renderMap();

    this.layerSwitchForm = this.fb.group({
      layerSwitchControl: []
    }); // initializing the form that will render the drop down items
  }

  switchLayer($event:any){
    console.log($event);
    if($event === "heatmap"){
      this.heatmap.setVisible(true);
      this.subzone.setVisible(false)
    }else if($event === "Incidences by Subzone"){
      this.heatmap.setVisible(false);
      this.subzone.setVisible(true)
    } // this function will switch layer visibility on and off
   
    
    
  }

// rendering map
renderMap(){
    const satelliteTileUrl = "http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}";
      

    this.heatmap = new Heatmap({
      source: new VectorSource({
        format: new GeoJSON({ featureProjection: 'EPSG:4326' }),
        url: 'https://raw.githubusercontent.com/nimaytenzin/realTimeWaterMonitoring/master/structures.geojson'
      }),
      radius: 10,
      blur:20,
      opacity:0.7,
      visible:false
      // weight: function (feature) {
      //   var name = feature.get('POPULATION');
      //   var magnitude = name;
      //   return magnitude - 5;
      // }
    });

    this.subzone = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON({ featureProjection: 'EPSG:4326' }),
        url: 'https://raw.githubusercontent.com/nimaytenzin/realTimeWaterMonitoring/master/subzones.geojson',
      }),
      visible:false
    })

    var map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({url: satelliteTileUrl})
        })
       
        // new VectorLayer({
        //   source: new VectorSource({
        //     format: new GeoJSON({ featureProjection: 'EPSG:4326' }),
        //     url: 'https://raw.githubusercontent.com/nimaytenzin/realTimeWaterMonitoring/master/structures.geojson'
        //   })
        // }),
      ],
        
      view: new View({
        center: olProj.fromLonLat([89.637773,27.473336]),
        zoom: 13
      })
    });

    const layerGroup = new LayerGroup({
      layers:[ this.heatmap, this.subzone]
    });
    map.addLayer(layerGroup); //add layers in the layers list and then add the list to the map target  
    
}

    
}

