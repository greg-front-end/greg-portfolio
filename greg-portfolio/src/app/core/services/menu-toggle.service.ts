import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuToggleService {

  public currentMenuValue = signal(false);

  public isMenuActive = computed(
      () => this.currentMenuValue());

  public onMenuActive(value: boolean): void {
    this.currentMenuValue.set(value)
  }
}
