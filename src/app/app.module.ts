import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoogleMaps } from "@ionic-native/google-maps";
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from "@ionic-native/camera";

import { MyApp } from './app.component';

import { UserServices } from "../providers/user-services";
import { PostServices } from "../providers/post-services";
import { CommentServices } from "../providers/comment-services";
import { MediaCapture } from "@ionic-native/media-capture";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { FileTransfer } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { FilePath } from "@ionic-native/file-path";
import { FileChooser } from "@ionic-native/file-chooser";
// import { SignupValidators } from "../validators/signupValidations";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    Geolocation,
    SplashScreen,
    Camera,
    MediaCapture,
    PhotoViewer,
    File,
    FileTransfer,
    FilePath,
    FileChooser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServices,
    PostServices,
    CommentServices,
    // SignupValidators
  ]
})
export class AppModule {}
