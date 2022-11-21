import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AppStateService {
    idpHint = '';
    userId: any;
    token: any;
    userDetails: any;
    constructor() { }
}