import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {typeForm} from "../../../../components/form/types";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store";
import {typeFormSelector} from "../../../../store/selectors/users.selectors";
import {toggleTypeFormAction} from "../../../../store/actions/users.actions";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  type$:Observable<typeForm>

  constructor(private store$: Store<AppState>) {
    this.type$ = this.store$.select(typeFormSelector)
  }

  ngOnInit(): void {
    this.store$.dispatch(toggleTypeFormAction({typeForm:typeForm.PROFILE}))
  }


}
