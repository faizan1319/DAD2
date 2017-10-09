import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  ILatLng
 } from '@ionic-native/google-maps';
 import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the PursuitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pursuit',
  templateUrl: 'pursuit.html',
})
export class PursuitPage {

  map                   : GoogleMap;
  mapElement            : HTMLElement;
  myLocation            : ILatLng;
  locationSubscription  : any ;
  distance              : number;
  postLocation          : ILatLng = {
    lat: this.navParams.get('postLat'),
    lng: this.navParams.get('postLng')
  };
  geolocationOptions    : any = {
    enableHighAccuracy  : true
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps: GoogleMaps,
    private geolocation: Geolocation,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PursuitPage');
    this.loadMap();
    let that = this;
    this.locationSubscription = this.geolocation.watchPosition(this.geolocationOptions)
    .subscribe((pos) => {
      let myLocation: ILatLng = {
        lat : pos.coords.latitude,
        lng : pos.coords.longitude
      }
      that.distance = this.googleMaps._spherical.computeDistanceBetween(myLocation, that.postLocation); 
    })
  }

  loadMap() {
    
    let loading = this.loadingCtrl.create({
      spinner: 'crescent'
    });
    loading.present();

    let that = this;
    
    this.geolocation.getCurrentPosition(this.geolocationOptions)
    .then((resp) => {
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: resp.coords.latitude,
            lng: resp.coords.longitude
          },
          zoom: 18,
          tilt: 30
        }
      };
      
      this.mapElement = document.getElementById('map');
      this.map = this.googleMaps.create(this.mapElement, mapOptions);
      this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
  
        that.map.setMyLocationEnabled(true);
        that.map.setTrafficEnabled(true);
        that.map.setCompassEnabled(true);
        loading.dismiss();
      });
    })
    .catch((error) => {
        console.log('Error getting location', error);
    });
  }

  ionViewDidLeave(){
    this.locationSubscription.unsubscribe;
  }
}
