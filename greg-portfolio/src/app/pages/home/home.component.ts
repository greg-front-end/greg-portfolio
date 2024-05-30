import {Component, inject} from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { SvgIconComponent } from "angular-svg-icon";
import { IsTranslationLoadedService } from "../../core/services/is-translation-loaded.service";
import { LoaderComponent } from "../../components/loader/loader/loader.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
    imports: [
        TranslateModule,
        CommonModule,
        SvgIconComponent,
        LoaderComponent,
    ],
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    public isContentLoadedService = inject(IsTranslationLoadedService);
}
