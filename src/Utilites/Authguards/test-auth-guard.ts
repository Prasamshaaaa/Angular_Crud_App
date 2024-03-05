// This code defines an Angular service named AuthGuard that implements the CanActivate 


import { Injectable } from "@angular/core";   //yo yeuta service ho
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class TestAuthGuard implements CanActivate{
    constructor(public router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let token = localStorage.getItem("ID");
        if(token){
            return true;
        }
        else{
            this.router.navigate([""]);
        }
    } 
}