import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import { Passportprovider } from '../../providers/passportprovider';
import { Post } from '../../models/posts';
import { Storage } from '@ionic/storage';

import {Register} from "../register/register";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [Passportprovider]
})
export class HomePage {

    posts: Post[];

    constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams, private ppapi: Passportprovider, private loadingCtrl: LoadingController) {
        // Create the popup
        let loadingPopup = this.loadingCtrl.create({
            content: 'Loading...'
        });

        // Show the popup
        loadingPopup.present();

        /*
         Get stored key
         */
        this.storage.get('key').then((val) => {

            if (val){
                //load data from api
                ppapi.load(val).subscribe(post =>{

                    this.posts = post;
                    loadingPopup.dismiss();
                })
            }else {
                this.gotoregister();
                loadingPopup.dismiss();
            }
        });

    }

    gotoregister(){
        return this.navCtrl.setRoot(Register, {}, {animate: true, direction: 'forward'});
        // return this.navCtrl.pop(Register);
    }

}
