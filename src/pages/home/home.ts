import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import { Passportprovider } from '../../providers/passportprovider';
import { Post } from '../../models/posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Passportprovider]
})
export class HomePage {

  posts: Post[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ppapi: Passportprovider, private loadingCtrl: LoadingController) {
    // Create the popup
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading...'
    });

    // Show the popup
    loadingPopup.present();

    //load data from api
    ppapi.load().subscribe(post =>{
      // console.log(post);
      // this.posts = post;
      // loadingPopup.dismiss();
      setTimeout(() => {
        this.posts = post;
        loadingPopup.dismiss();
      }, 1000);
    })
  }

}
