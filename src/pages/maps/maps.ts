import { 
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

import { Component } from '@angular/core';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker,
  GoogleMapOptions
} from '@ionic-native/google-maps';

import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the Maps page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class Maps {
    myLocationLng: number;
    myLocationLat: number;
    // map: GoogleMap;
    // lat: any;
    // lng: any;

  constructor(private googleMaps: GoogleMaps, private geolocation: Geolocation) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Maps');
    this.loadMap();
  }

  // ngAfterViewInit()
  // {
  // }

  loadMap()
  {
    console.log('in load map');
    // let option = {enableHighAccuracy: true} ;
    // this.geolocation.getCurrentPosition(option)
    // .then((resp) => {
      let mapOptions: GoogleMapOptions = {
        camera: {
          zoom: 18,
          tilt: 30
        }
      };

      let element: HTMLElement = document.getElementById('map');

      let map: GoogleMap = this.googleMaps.create(element, mapOptions);
      // let map: GoogleMap = this.googleMaps.create(element);

      
      map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log('Map is ready!')
        let option = {enableHighAccuracy: true} ;
        this.geolocation.getCurrentPosition(option)
        .then((resp) => {
          let target = {
            lat: resp.coords.latitude,
            lng: resp.coords.longitude
          }

          let cameraViewCenter : CameraPosition<any> = {
            target,
            tilt: 30,
            zoom: 12
          }

          map.moveCamera(cameraViewCenter);

          map.addMarker({
            title: 'Me',
            icon: 'blue',
            animation: 'DROP',
            position: target
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

        })
      });

      // let ionic: LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
      // let position: CameraPosition = {
      //   target: ionic,
      //   zoom: 100,
      //   tilt: 30
      // };
      // console.log('after ionic', ionic);

      // map.moveCamera(position);

      // let markerOptions: MarkerOptions = {
      //   position: ionic,
      //   title: 'Me'
      // };

      // const marker: any = map.addMarker(markerOptions)
      // .then((marker: Marker) => {
      //     marker.showInfoWindow();
      // });   
    // })
    // .catch((error) => {
    //     console.log('Error getting location', error)
    // })
  }
}
