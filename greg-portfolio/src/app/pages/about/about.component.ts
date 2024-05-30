import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { JsonPipe, KeyValuePipe } from "@angular/common";
import { SvgIconComponent } from "angular-svg-icon";
import { IsTranslationLoadedService } from '../../core/services/is-translation-loaded.service';
import { LoaderComponent } from "../../components/loader/loader/loader.component";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [
        TranslateModule,
        JsonPipe,
        KeyValuePipe,
        SvgIconComponent,
        LoaderComponent
    ]
})
export class AboutComponent implements OnInit {  
  private translateService = inject(TranslateService);
  private http = inject(HttpClient);

  public currentLang: string = 'en';
  public isContentLoadedService = inject(IsTranslationLoadedService);

  public ngOnInit(): void {
    this.currentLang = this.translateService.currentLang || 'en';

      this.translateService.onLangChange.subscribe((translation) => {
          this.currentLang = translation.lang;
      });
  }

   public downloadCV(): void {
    const fileUrl = `../../../assets/pages/about/cv/resume-${this.currentLang}.pdf`;
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'Grachia_Martirosian_CV.pdf';
      a.click();
      URL.revokeObjectURL(objectUrl);
    }, error => {
      console.error('Download error:', error);
    });
  }
}
