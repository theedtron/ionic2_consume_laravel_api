import {Component, ViewChild} from '@angular/core';
// import { StatusBar, SplashScreen } from '@ionic-native';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Platform, MenuController, Nav, NavController} from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import {ContactPage} from '../pages/contact/contact';
import {AboutPage} from '../pages/about/about';
import {Register} from '../pages/register/register';
import {Passportprovider} from "../providers/passportprovider";
// import {User} from "../models/user";
import { Storage } from '@ionic/storage';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    // rootPage:any = this.checkLogin();
    rootPage:any = TabsPage;

    pages: Array<{title: string, component: any}>;

    constructor(public platform: Platform, public menu: MenuController, public splash: SplashScreen, public statbar: StatusBar, public passportprovide: Passportprovider, public navCtrl: NavController) {
        this.initializeApp();

        this.pages = [
            { title: 'Homepage', component: TabsPage },
            { title: 'Contact', component: ContactPage },
            { title: 'About', component: AboutPage },
            { title: 'Register', component: Register }
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statbar.styleDefault();
            this.splash.hide();
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }

  checkLogin(){

    // this.passportprovide.fetchUser().subscribe(user =>{
    //     console.log(user);
    //   this.users = user;
    //     this.theuser = user;
    //
    // });
      var items;

      var theerrorlog = this.passportprovide.error.subscribe(error => {
          console.log('checking error');
          if (error.status == 401 ||error.status == 403) {
              // unauthorised, redirect to login
              return 'unauthorized';
          }else {
              return 'authorized';
          }
          // error, alert message
      });

      console.log(theerrorlog);

    var thestore = new Storage(null);

    var checkkey = thestore.get('key').then((data) => {
        items = data;
        console.log(data);
    });

    if (typeof checkkey == null || typeof checkkey == 'undefined' || typeof checkkey == 'object'){

        console.log('No key');
        console.log(checkkey);
        return Register;

    }else {
        console.log(checkkey);
        return TabsPage;
    }

  }
}
