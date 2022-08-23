import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {closeModalsAction} from "../../store/actions/modals.actions";

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnDestroy {
  constructor(private store$:Store<AppState>) { }
  ngOnDestroy() {
    this.store$.dispatch(closeModalsAction())
  }
}
