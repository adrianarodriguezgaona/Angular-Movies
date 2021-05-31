import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, LatLng, latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap, coordinatesMapWithMessage } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  
  center;

  ngOnInit(): void {
    //this.center= latLng(this.initialCoordinates[0].lat, this.initialCoordinates[0].lng);
    this.layers = this.initialCoordinates.map((value) => {
      const m = marker([value.lat, value.lng]);    
      if (value.message){
        m.bindPopup(value.message,{autoClose: false, autoPan: false});
      }
      return m;
    });
  }

  @Input()
  initialCoordinates: coordinatesMapWithMessage[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();

  @Input()
  editMode: boolean = true;
  

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 18, attribution: 'Angular Movies'})
    ],
    zoom: 12,
    center: latLng( 4.660950272189076, -74.10827636718751)
  };

  layers: Marker<any>[] = [];
 

  handleMapClick(event: LeafletMouseEvent){
    if (this.editMode){
      const lat = event.latlng.lat;
      const lng = event.latlng.lng;
      console.log({lat, lng});
      this.layers = [];
      this.layers.push(marker([lat, lng]));
      this.onSelectedLocation.emit({lat, lng});
    }   
  }
  
}
