import {Component} from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        HttpClientModule,
        SvgIconComponent,
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
