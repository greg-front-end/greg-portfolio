import { Component, inject, OnInit, signal } from '@angular/core';
import { PortfolioCardComponent } from "../portfolio-card/portfolio-card.component";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CardI } from "./models";

@Component({
  selector: 'app-project-page',
  standalone: true,
    imports: [
        PortfolioCardComponent,
        TranslateModule,
        RouterLink
    ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private translateService = inject(TranslateService);

    public card = signal<CardI>({ workTitle: "" });
    public projectLinkLabels = {
        goBack: '',
        seeProject: '',
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')!;

        this.card.set(this.translateService.translations[this.translateService.currentLang].portfolio[id])
        this.projectLinkLabels = {
            ...this.translateService.translations[this.translateService.currentLang].portfolio.projectLinksLabels,
        }

        this.translateService.onLangChange.subscribe((translation) => {
           this.card.set(translation.translations.portfolio[id]);

            this.projectLinkLabels = {
                ...this.translateService.translations[this.translateService.currentLang].portfolio.projectLinksLabels,
            }
        });
    }
}
