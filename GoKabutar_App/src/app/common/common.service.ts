import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { User } from '../models/user';

@Injectable()
export class CommonService {
    API_ENDPOINT: string = "http://70.35.198.86/GokData/";
    constructor(private http: Http) { }

    createUser(user: User) {  
        const body = JSON.stringify({
            "firstname": user.firstName,
            "lastname": user.lastName,
            "email": user.email,
            "password": user.password,
            "phone": user.phone,
            "city": user.city,
            "inviteCode":user.inviteCode
        });
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //headers.append('Access-Control-Allow-Origin', '*');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.API_ENDPOINT + 'Provider?Id=1', body, options)
            .map((response: Response) => response.json());
    }

    loginUser(email:any,pssword:any) {
        let baseurl = this.API_ENDPOINT + 'Provider/Login?';
        let param1 = 'UserName=';
        let param2 = '&Password=';

        let url = `${`${baseurl}` + `${param1}` + `${email}` +
            `${param2}` + `${pssword}`}`;
        ;
        return this.http.post(url,'')
            .map((response: Response) => response.json());
    }

    private handleError(error: any) {
        return Observable.throw(error.json());
    }
}
