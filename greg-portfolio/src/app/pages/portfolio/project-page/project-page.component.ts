import { Component, inject, OnInit, signal } from '@angular/core';
import { PortfolioCardComponent } from "../portfolio-card/portfolio-card.component";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CardI } from "./models";
import { IsTranslationLoadedService } from '../../../core/services/is-translation-loaded.service';
import { LoaderComponent } from "../../../components/loader/loader/loader.component";

@Component({
    selector: 'app-project-page',
    standalone: true,
    templateUrl: './project-page.component.html',
    styleUrl: './project-page.component.scss',
    imports: [
        PortfolioCardComponent,
        TranslateModule,
        RouterLink,
        LoaderComponent
    ]
})
export class ProjectPageComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private translateService = inject(TranslateService);

    public isContentLoadedService = inject(IsTranslationLoadedService);
    public card = signal<CardI>({ pageSectionName: "" });
    public projectLinkLabels = {
        goBack: '',
        seeProject: '',
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')!;
        console.log(id);
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
