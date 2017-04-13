import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { Post } from '../../src/models/posts';
import { Storage } from '@ionic/storage';

/*
 Generated class for the Passportprovider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Passportprovider {

    passpotapiurl = 'http://yoursite.com';

    constructor(public http: Http, public keystore: Storage) {
        // console.log('Hello Passportprovider Provider');
        // set a key/value
        // keystore.set('key', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2OGUyYTI1MjEzOTViMDQ0ZDNmYTI1MzNiNzQxZjYzOTZhNzhjYzRjOWQ2Yzk1YzlmY2VkOWQ4ZmY3M2Q5NDY3MmQwZjI2MDlmN2RlNjU0In0');

        // Or to get a key/value pair
        var checkkey = keystore.get('key');

        if (checkkey){
            console.log(checkkey);
        }else {
            console.log('No key');
        }
    }

    /*
     Api Tester
     */
    load(): Observable<Post[]> {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer YOURKEY');
        let options = new RequestOptions({headers: headers});

        return this.http.get(`${this.passpotapiurl}/api/test`,options)
            .map(res => <Post[]>res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
