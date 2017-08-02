import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker, GoogleMaps } from "@ionic-native/google-maps";

/**
 * Generated class for the RelatedNews page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-related-news',
  templateUrl: 'related-news.html',
})
export class RelatedNews {
    
    slideTitle: string = "Relevant Events";
    postLng: any;
    postLat: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatedNews');
  }

    ngAfterViewInit()
  {
    this.loadMap();
  }

  loadMap()
  {
      let element: HTMLElement = document.getElementById('map');

      let map: GoogleMap = this.googleMaps.create(element);

      map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

      let ionic: LatLng = new LatLng(this.postLat, this.postLng);
                          let position: CameraPosition = {
                            target: ionic,
                            zoom: 70,
                            tilt: 30
                          };

      map.moveCamera(position);

      let markerOptions: MarkerOptions = {
        position: ionic,
        title: 'Ionic'
      };

      const marker: any = map.addMarker(markerOptions).then((marker: Marker) => {
        marker.showInfoWindow();
      });   
  }

}
