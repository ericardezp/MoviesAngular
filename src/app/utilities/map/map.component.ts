import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker } from 'leaflet';
import { Coordinate } from './coordinate.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  @Input() initialCoodinates: Coordinate[] = [];
  @Output() selectedCoordinateEvent: EventEmitter<Coordinate> = new EventEmitter<Coordinate>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 15,
    center: latLng(25.77757591121106, -100.11085510253908)
  };

  layers: Marker<any>[] = [];

  ngOnInit(): void {
    this.layers =  this.initialCoodinates.map(value => marker([value.latitude, value.longitude]));
  }

  handlerClick(event: LeafletMouseEvent): void {
    const lat: number = event.latlng.lat;
    const long: number = event.latlng.lng;
    console.log({latitud: lat, longitud: long});

    this.layers = [];
    this.layers.push(marker([lat, long]));
    this.selectedCoordinateEvent.emit({
      latitude: lat,
      longitude: long
    });
  }

}
