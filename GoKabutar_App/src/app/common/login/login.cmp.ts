import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { CommonService } from '../common.service';
declare var $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.cmp.html',
    providers: [CommonService]
})
export class LoginComponent implements OnInit {
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

    login() {
        this.loading = true;
        this.cService.loginUser(this.model.loginEmail, this.model.password)
            .subscribe((response) => {
                this.successMsg = "Successfully Logged In";
                this.loading = false;
                setTimeout(function () {
                    this.successMsg = '';
                }.bind(this), 5000);
            },
            (error) => {
                this.loading = false;
                this.errorMsg = "Invalid username and password";
                setTimeout(function () {
                    this.errorMsg = '';
                }.bind(this), 5000);
            });
    }
}



