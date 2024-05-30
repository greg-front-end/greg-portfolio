import { Component, inject } from '@angular/core';
import { hardSkills } from "./dataSkills";
import { TranslateModule } from "@ngx-translate/core";
import { SvgIconComponent } from "angular-svg-icon";
import { IsTranslationLoadedService } from '../../core/services/is-translation-loaded.service';
import { LoaderComponent } from "../../components/loader/loader/loader.component";

@Component({
    selector: 'app-skills',
    standalone: true,
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
    imports: [
        TranslateModule,
        SvgIconComponent,
        LoaderComponent
    ]
})
export class SkillsComponent {
  public isContentLoadedService = inject(IsTranslationLoadedService);
  public hardSkills = hardSkills;
}
