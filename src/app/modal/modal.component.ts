import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {elementAt, Observable} from "rxjs";
import {AppState} from "../store";
import {Store} from "@ngrx/store";
import {
  isOpenConfirmModalSelector,
  isOpenInfoModalSelector,
  isOpenSettingsModalSelector
} from "../store/selectors/modals.selectors";
import {closeModalsAction} from "../store/actions/modals.actions";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  isOpenConfirm$: Observable<boolean> = this.store$.select(isOpenConfirmModalSelector)
  isOpenInfo$: Observable<boolean> = this.store$.select(isOpenInfoModalSelector)
  isOpenSettings$: Observable<boolean> = this.store$.select(isOpenSettingsModalSelector)
  #element: any = null

  constructor(private store$: Store<AppState>) {
  }

  ngAfterViewInit() {
    this.#element = document.querySelector('#overlay-modal')
    this.#element.addEventListener('click', (e:any) => {
      const targetsElements: HTMLElement[] = [...e.path]
      targetsElements.pop()
      targetsElements.pop()
      const modalsElement: HTMLElement | undefined = targetsElements.find(
        (element) => element.classList.contains('modal')
      )
      if (!modalsElement){
        this.store$.dispatch(closeModalsAction())
      }
    })
  }
}
