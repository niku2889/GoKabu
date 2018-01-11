import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.cmp.html',
    providers: [HomeService]
})
export class HomeComponent  {

 
}



