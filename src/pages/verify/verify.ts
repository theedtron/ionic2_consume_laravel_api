import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Storage} from "@ionic/storage";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the Verify page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-verify',
    templateUrl: 'verify.html',
})
export class Verify {

    myForm: FormGroup;
    private myData: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, formbuilder: FormBuilder, public http: Http, public storage: Storage) {
        // create a new formbuilder group with 'phone' and 'name' as fields
        this.myForm = formbuilder.group({
            'verification_code': ['', Validators.required]
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

        this.http.post(`${passpotapiurl}/api/verify`, postParams, options)
            .subscribe(data => {
                console.log(data['_body']);

                // set a key/value
                this.storage.set('key', data['_body']);
            }, error => {
                console.log('error');
            });

      this.navCtrl.setRoot(TabsPage);

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Verify');
    }

}
