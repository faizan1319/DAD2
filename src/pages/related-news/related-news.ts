import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker, GoogleMaps, GoogleMapOptions, Spherical, ILatLng } from "@ionic-native/google-maps";
import { PostServices } from '../../providers/post-services';
import { Geolocation } from '@ionic-native/geolocation';

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

    slideTitle                      : string = "Relevant Events";
    postsForEmployee                : any;
    userData                        : any    = this.navParams.get('userData');
    locationSubscription            : any;
    // myLocation                      : ILatLng ;
    
  constructor(
    public navCtrl        : NavController,
    public navParams      : NavParams,
    private service       : PostServices,
    private geolocation   : Geolocation,
    private spherical     : Spherical,
    private toastCtrl     : ToastController,
    public loadingCtrl    : LoadingController
  ) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad RelatedNews');
    let loading = this.loadingCtrl.create({
      spinner: 'crescent'
    });
    loading.present();

    this.service.getPostForEmployee(this.userData.employeePostCategoryId)
    .subscribe((data) => {
      this.postsForEmployee = data;
      console.log('post for employee: ', this.postsForEmployee);
      loading.dismiss();
    })
  }

  getDistanceFromEmployee(lat: number, lng: number) {
    
    let loading = this.loadingCtrl.create({
      spinner: 'crescent'
    });
    loading.present();

    let postLocation: ILatLng = {
      lat,
      lng
    }

    let geolocatioOptions = {
      enableHighAccuracy: true
    };

    this.geolocation.getCurrentPosition(geolocatioOptions)
    .then((resp) => {

      let myLocation: ILatLng = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      }

      console.log('My Location: ',myLocation);
      console.log('Post Location: ',postLocation);
      
      // this.myLocation.lat = resp.coords.latitude;
      // this.myLocation.lng = resp.coords.latitude;
      
      let distance = this.spherical.computeDistanceBetween(myLocation, postLocation);
      loading.dismiss();
      let toast = this.toastCtrl.create({
        message         : 'Distance from your current position is: '+distance,
        showCloseButton : true,
        closeButtonText : 'Ok'
      });

      toast.present();
    })
  }

  openPursuitPage(lat: number, lng: number) {
    this.navCtrl.push('PursuitPage', {
      postLat: lat,
      postLng: lng
    });
  }

}
