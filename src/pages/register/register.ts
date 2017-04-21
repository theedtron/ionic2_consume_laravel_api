import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Http, Headers, RequestOptions } from '@angular/http';
import {Verify} from "../verify/verify";


/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class Register {

    myForm: FormGroup;
    private myData: any;


    constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: Http) {

        // create a new formbuilder group with 'phone' and 'name' as fields
        this.myForm = formBuilder.group({
            'name': ['', Validators.required],
            'phone': ['', Validators.required]
        })
    }

  onSubmit(formData) {

    console.log('Form data is ', JSON.stringify(formData.value));
    this.myData = JSON.stringify(formData.value);

    // var reg;
    var passpotapiurl = 'http://passport.wn.co.ke';
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});

    let postParams = JSON.stringify(formData.value);

     this.http.post(`${passpotapiurl}/api/register`, postParams, options)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log('error');
      });

    this.navCtrl.setRoot(Verify);

  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Register');
    }

}
