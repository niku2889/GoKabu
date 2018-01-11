import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.cmp.html',
    providers: [CommonService]
})
export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;
    successMsg: string = '';
    errorMsg: string = '';

    ngOnInit() {
    }

    constructor(
        private router: Router,
        private cService: CommonService) {
    }

    register() {
        this.loading = true;
        this.cService.createUser(this.model)
            .subscribe(
            data => {
                this.successMsg = data;
                this.loading = false;
                setTimeout(function () {
                    this.successMsg = '';
                }.bind(this), 5000);
            },
            error => {
                this.loading = false;
                this.errorMsg = error._body;
                setTimeout(function () {
                    this.errorMsg = '';
                }.bind(this), 5000);
            });
    }
}