import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class HomeService {
    API_ENDPOINT: string = "http://70.35.198.86/GTIKITappLayer/";
    constructor(private http: Http) { }

    GetAllEvents() {
        return this.http.get(this.API_ENDPOINT + 'GTEvent')
            .map((response: Response) => response.json());
    }

    GetSearchEvents(category: any, place: any, date: any) {
        if (category != '') {
            return this.http.get(this.API_ENDPOINT + 'GTIKIT/GTCustomer/SearchResult/' + category)
                .map((response: Response) => response.json());
        } else if (place != '') {
            return this.http.get(this.API_ENDPOINT + 'GTIKIT/GTCustomer/SearchResult/' + place)
                .map((response: Response) => response.json());
        } else if (date != '') {
            return this.http.get(this.API_ENDPOINT + 'GTIKIT/GTCustomer/SearchResult/' + date)
                .map((response: Response) => response.json());
        } else {
            this.GetAllEvents();
        }
    }

    private handleError(error: any) {
        return Observable.throw(error.json());
    }
}
