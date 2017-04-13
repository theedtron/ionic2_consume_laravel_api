import {Component, ViewChild} from '@angular/core';
// import { StatusBar, SplashScreen } from '@ionic-native';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
// import {HomePage} from '../pages/home/home';
import {ContactPage} from '../pages/contact/contact';
import {AboutPage} from '../pages/about/about';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage:any = TabsPage;

    pages: Array<{title: string, component: any}>;

    constructor(public platform: Platform, public menu: MenuController, public splash: SplashScreen, public statbar: StatusBar) {
        this.initializeApp();

        this.pages = [
            { title: 'Homepage', component: TabsPage },
            { title: 'Contact', component: ContactPage },
            { title: 'About', component: AboutPage }
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
}
