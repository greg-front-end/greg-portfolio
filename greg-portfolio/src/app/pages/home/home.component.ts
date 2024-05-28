import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
    imports: [
        TranslateModule,
        CommonModule,
        SvgIconComponent,
    ],
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
