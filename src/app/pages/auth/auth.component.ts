import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {typeForm} from "../../components/form/types";
import {typeFormSelector} from "../../store/selectors/users.selectors";
import {Observable} from "rxjs";
import {toggleTypeFormAction} from "../../store/actions/users.actions";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  type$:Observable<typeForm>

  constructor(private store$: Store<AppState>) {
    this.type$ = this.store$.select(typeFormSelector)
  }

  ngOnInit(): void {
    this.store$.dispatch(toggleTypeFormAction({typeForm:typeForm.AUTHORIZATION}))
  }

}
