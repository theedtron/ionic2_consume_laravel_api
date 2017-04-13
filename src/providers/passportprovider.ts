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

    passpotapiurl = 'http://passport.wn.co.ke';

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
        headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2OGUyYTI1MjEzOTViMDQ0ZDNmYTI1MzNiNzQxZjYzOTZhNzhjYzRjOWQ2Yzk1YzlmY2VkOWQ4ZmY3M2Q5NDY3MmQwZjI2MDlmN2RlNjU0In0.eyJhdWQiOiIyIiwianRpIjoiYjY4ZTJhMjUyMTM5NWIwNDRkM2ZhMjUzM2I3NDFmNjM5NmE3OGNjNGM5ZDZjOTVjOWZjZWQ5ZDhmZjczZDk0NjcyZDBmMjYwOWY3ZGU2NTQiLCJpYXQiOjE0OTIwMDA5MzEsIm5iZiI6MTQ5MjAwMDkzMSwiZXhwIjoxNTIzNTM2OTMxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.eCjsFcMuc5_-Hx4USS2VIsocbwbUsgY1DCFVte4cNWeZA0I8hNC9oGkoNbAjajZK_inBQqv5nEJo_xJcJxgBlAANvCrwVTV5LLjqCGnAaKZPqRzWeyFlGDn9GcTKqk_7HSxqRqOaZC-cD8ZjBRo36VkunfCqbqNasuEjIdS-4GEw3Dyq-OCll64ta5_cn9odBvR1EZq3QAHomCZoxqJvqOaevPtO48ZQzFQK60TmGZazSMYYsSpnUdzdz4FjYFoc0FTloqkPdDBP9V5G8n9kGwTP5e4bm9C2GA9aUAY4GHIJmx78oLCxrFpDIHrbrUZnwLtoubkJTpqNodsJlnxiKwRg_SN2XVCNp1oeqQ4R2qNQGZCvKB85BMc-amAoXiwbk11QuTOxg1jvoSZF7_5gBQrkA2dux2SJNL6RVk-zsGck6lVPtLum14TwqWf_fIvL4ql8XiSM2Ge6T3RdIE5tTmJyvYClxY2IftsouHmw4FCY1WjCgCuxnATfVB8IRz9d_ONcpgZNWRg8np55914559JzwC5qSWpatFdA0WJAf74mnShsSq5425ACu1zIl-eJoab_8cCNvQYmE4k6AlB5F1rEne-S8RP-VmuKjSU0SR2GLZt0ebVtk7IUkAbGKQOHvFdeiuQ7cpmrG59EfxNUDMPHcLoTfPrfnF21Zpd2k8Y');
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
