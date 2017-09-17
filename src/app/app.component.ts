import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { MainPage } from "../pages/main-page/main-page";
// import { Login } from "../pages/login/login";
// import { RelatedNews } from "../pages/related-news/related-news";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "WelcomePage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

