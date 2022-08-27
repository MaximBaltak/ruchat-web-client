import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from "../store";
import {Store} from "@ngrx/store";
import {closeModalsAction} from "../store/actions/modals.actions";

@Injectable({
  providedIn: 'root'
})
export class ModalsGuard implements CanActivate {
  constructor(private store$: Store<AppState>) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.store$.dispatch(closeModalsAction())
    return true;
  }

}
