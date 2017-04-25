import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { Post } from '../../src/models/posts';
import { Storage } from '@ionic/storage';
import {User} from "../models/user";
// import {Register} from "../pages/register/register";
import {NavController} from "ionic-angular";
import 'rxjs/Rx';

/*
 Generated class for the Passportprovider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Passportprovider {

    passpotapiurl = 'http://passport.wn.co.ke';
    private errorObserver: any;
    public error: any;
    public items: any;
    public mydata: any = [];

    constructor(public http: Http, public navCtrl: NavController, public storage: Storage) {
        // console.log('Hello Passportprovider Provider');

        this.errorObserver = null;
        this.error = Observable.create(observer => {
            this.errorObserver = observer;
        });

    }

    /*
     Api Tester
     */
    load(val): Observable<Post[]> {


        var headers = new Headers();
        // let checkkey = this.getStoredKey();

        // let masterkey = checkkey


        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + val);
        let options = new RequestOptions({headers: headers});

        return this.http.get(`${this.passpotapiurl}/api/test`,options)
            .map(res =><Post[]>res.json())
            .catch(error => this.handleError(error));

    }

    private handleError(error) {
        console.error(error);
        // this.errorObserver.next(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    fetchUser(): Observable<User[]> {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBiMDA4M2Y2MzI3ZDI5MzFlZmYzMzVjZDMwZDkwMTJmNWRhZmZmNTc3MzkyMDc3NmEwNDhlZDUxZDVmMjcwMDI0ZmQ0MGQzMGIzMmU3ZDAzIn0.eyJhdWQiOiIzIiwianRpIjoiMGIwMDgzZjYzMjdkMjkzMWVmZjMzNWNkMzBkOTAxMmY1ZGFmZmY1NzczOTIwNzc2YTA0OGVkNTFkNWYyNzAwMjRmZDQwZDMwYjMyZTdkMDMiLCJpYXQiOjE0OTI2NzkzMjgsIm5iZiI6MTQ5MjY3OTMyOCwiZXhwIjoxNTI0MjE1MzI3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kWIlkWRTVs1RlXo2mAVL6pRm9ZcsfnloYs-5JLti7WLI-X29yGJpJRzDqyHsOlHMJQXScSzQj8kqFC0hkmkVsmTnvtdrblJkPhAOf6pucGAE77vYR-SB_pTH4Ezo3rEOpx39bl-uVaXlePBSq2Sb_pEthvJfdZnpxJ_GNaNuL2RKY3XfR0H1XVY375R7izIAiE8ZVednFs4yIpMgr6AhUY370J9NqnCsQDgxs8abWdT88CwLnqdAneI8jheYlrqIV1C8ZIO2uXtgFH6iYe_MSaPYUT1Fuy2fLfvT1hMVOd2vNgSZVOKkVZUBFbqH_VlRSBnabkYIlajrTuoIUz0uJLoMHZoCS2XcpSRiJ6cO2n0kFN4eHBZh6cW87ffnJV3iZaPmzSohTcTLXnN79oQFON_Zw2QzCnehqp7zxJuIn1IXXVz5rUAyFJFB-S6IEn715CV_JEIYpgFAjjbg5VM_vknouoCxUSa_feDuVPauypiYPtHrTuVoogfUcFpzIDfKNTavE9o_xD-BfaU7WiiWYFP9jbZAHfJLGEF-Va9s8CEdqGMUvpm0APYZHIO3uf84Tiw1sdCBcWBughNohF63tOin3YrYhA246V7V1zA6bej7Ib6kRNQKKekYskm_UGW4N2-5T55xMY5SxV5FEof2Zp2BUHpfcQAhnnFbxMWdV10');
        let options = new RequestOptions({headers: headers});

        return this.http.get(`${this.passpotapiurl}/api/user`,options)
            .map(res => <User[]>res.json())
            .catch(this.handleError);
    }

}
