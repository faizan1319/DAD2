import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';


import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeneralMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-general-map',
  templateUrl: 'general-map.html',
})
export class GeneralMapPage {

  mapElement: HTMLElement;
  map: GoogleMap;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps: GoogleMaps,
    private geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public diagnostic: Diagnostic
  ) {
  }

  ionViewDidLoad() {
    let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
    let errorCallback = (e) => console.error(e);

    let check = this.diagnostic.isLocationAvailable;
    console.log('ionViewDidLoad GeneralMapPage', check);
    this.loadMap();
  }

  loadMap() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent'
    });
    loading.present();

    this.geolocation.getCurrentPosition()
    .then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
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
  
        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: resp.coords.latitude,
              lng: resp.coords.longitude
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

          loading.dismiss();
  
      });
    })
    .catch((error) => {
       console.log('Error getting location', error);
    });
    
    

    
    
    
    // Wait the MAP_READY before using any methods.
    

  }

}
