import { Component, inject } from '@angular/core';
import { MenuToggleService } from "../../core/services/menu-toggle.service";
import { ClickOutsideDirective } from "../../core/directives/click-outside/click-outside.directive";

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [
    ClickOutsideDirective
  ],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  private isActiveBurger = false;

  public menuToggleService = inject(MenuToggleService);

  public onClickMenu(): void {
    this.isActiveBurger = !this.isActiveBurger;

    this.menuToggleService.onMenuActive(this.isActiveBurger);
  }

  public onCLickOutSide(): void {
    this.isActiveBurger = false;
    this.menuToggleService.onMenuActive(false);
  }
}
