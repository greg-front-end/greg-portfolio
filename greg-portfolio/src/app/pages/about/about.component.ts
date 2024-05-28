import {Component, inject, OnInit} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import { JsonPipe, KeyValuePipe } from "@angular/common";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        TranslateModule,
        JsonPipe,
        KeyValuePipe,
        SvgIconComponent
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  public currentLang: string = 'en';

  private translateService = inject(TranslateService);

  public ngOnInit(): void {
    this.currentLang = this.translateService.currentLang || 'en';

      this.translateService.onLangChange.subscribe((translation) => {
          this.currentLang = translation.lang;
      });
  }
}
