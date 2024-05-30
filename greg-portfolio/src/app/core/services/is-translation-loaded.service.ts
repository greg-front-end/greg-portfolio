import { Injectable, OnDestroy, signal } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IsTranslationLoadedService implements OnDestroy {
  private routerSubscriber;

  public isTranslationLoaded = signal<boolean>(false);

  constructor(private router: Router, private translateService: TranslateService) {
    this.routerSubscriber = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkTranslation();
    });
  }

  ngOnDestroy(): void {
    this.routerSubscriber.unsubscribe();
  }


  private checkTranslation(): void {
    const currentUrlArr = this.router.url === '/' ? ['home'] : this.router.url.split('/');
    const currentPage: string = this.router.url === '/' ? currentUrlArr[0] : currentUrlArr.slice(1).join('.');

    const key = `${currentPage}.pageSectionName`;

    if (this.translateService.instant(key) !== key) {
      this.isTranslationLoaded.set(true);
    } else {
      this.isTranslationLoaded.set(false);
    }
  }
}

