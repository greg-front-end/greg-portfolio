import { Component, inject } from '@angular/core';
import { hardSkills } from "./dataSkills";
import { TranslateModule } from "@ngx-translate/core";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: 'app-skills',
  standalone: true,
    imports: [
        TranslateModule,
        SvgIconComponent
    ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  public hardSkills = hardSkills;
}
