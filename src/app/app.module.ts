import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, NavController} from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Passportprovider } from '../providers/passportprovider';
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from '@ionic/storage';
// import {provideStorage} from "@ionic/storage/es5/storage";
import {Register} from "../pages/register/register";
import {Verify} from "../pages/verify/verify";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Register,
    Verify,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SuperTabsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Register,
    Verify
  ],
  providers: [
    StatusBar,
    SplashScreen,
    [NavController],
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    [Passportprovider],
  ]
})
export class AppModule {}
