import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker, GoogleMapOptions } from "@ionic-native/google-maps";

/**
 * Generated class for the PostMapModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-post-map-modal',
  templateUrl: 'post-map-modal.html',
})
export class PostMapModal {

  constructor(public navParams: NavParams, public googleMaps: GoogleMaps, public loadingCtrl: LoadingController) {
  }

  postLat   : number = this.navParams.get('latitude');
  postLng   : number = this.navParams.get('longitude');
  postTitle : string = this.navParams.get('title');

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PostMapModal');
    console.log('lat: ', this.postLat);
    console.log('lat: ', this.postLng);
  }

  ngAfterViewInit()
  {
    this.loadMap();
  }

  loadMap()
  {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent'
    });
    loading.present();

    let element: HTMLElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.postLat,
          lng: this.postLng
        },
        zoom: 18,
        tilt: 30
      }
    };

    let map: GoogleMap = this.googleMaps.create(element, mapOptions);

    map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

    let ionic: LatLng = new LatLng(this.postLat, this.postLng);
    // let position: CameraPosition = {
    //   target: ionic,
    //   zoom: 30,
    //   tilt: 30
    // };

    // map.moveCamera(position);

    let markerOptions: MarkerOptions = {
      position: ionic,
      title: this.postTitle
    };

    const marker: any = map.addMarker(markerOptions).then((marker: Marker) => {
      marker.showInfoWindow();
    }); 
    
    loading.dismiss();
  }

}
