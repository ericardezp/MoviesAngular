import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker, map } from 'leaflet';
import { Coordinate, CoordinateWithMessage } from './coordinate.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  @Input() initialCoodinates: CoordinateWithMessage[] = [];
  @Input() readOnly = false;
  @Output() selectedCoordinateEvent: EventEmitter<Coordinate> = new EventEmitter<Coordinate>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: latLng(25.720182972978684, -100.22043943405153)
  };

  layers: Marker<any>[] = [];

  ngOnInit(): void {
    this.layers = this.initialCoodinates.map((value) => {
    let mark = marker([value.latitude, value.longitude]);
    if (value.message) {
      mark.bindPopup(value.message, {autoClose: false, autoPan: false});
    }

    return mark;
  });
    this.initialCoodinates.map(value => console.log(value.latitude, value.longitude));
  }


  handlerClick(event: LeafletMouseEvent): void {
    if (!this.readOnly) {
      const lat: number = event.latlng.lat;
      const long: number = event.latlng.lng;

      this.layers = [];
      this.layers.push(marker([lat, long]));
      this.selectedCoordinateEvent.emit({
        latitude: lat,
        longitude: long
      });
    }
  }
}
