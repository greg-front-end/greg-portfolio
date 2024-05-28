import {Component, Inject, inject, PLATFORM_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MenuToggleService} from "./core/services/menu-toggle.service";
import {langs} from "./components/header/dataRouters";
import {TranslateService} from "@ngx-translate/core";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private translateService = inject(TranslateService);

  public menuToggleService = inject(MenuToggleService);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const userLang = localStorage.getItem('lang') || 'en';
      this.translateService.setDefaultLang(userLang);
      this.translateService.use(userLang);
    }
  }

  title = 'greg-portfolio';
}
