import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, Marker, MarkerOptions, GoogleMapOptions } from "@ionic-native/google-maps";

/**
 * Generated class for the PostDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetail {

  constructor(private googleMaps: GoogleMaps, navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetail');
  }

  postMediaType   : string;
  postMediaSrc    : string;
  postDescription : string;
  postLikes       : number;
  postComments    : number;
  postDislikes    : number;
  postLat         : number;
  postLng         : number;

  ngAfterViewInit()
  {
    this.loadMap();
  }

  loadMap()
  {
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
    //   zoom: 70,
    //   tilt: 30
    // };

    // map.moveCamera(position);

    let markerOptions: MarkerOptions = {
      position: ionic,
      title: 'Ionic'
    };

    const marker: any = map.addMarker(markerOptions).then((marker: Marker) => {
      marker.showInfoWindow();
    });   
  }

}
