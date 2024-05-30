import { Component, computed, inject, signal } from '@angular/core';
import { filterButtons, portfolios } from "./data";
import { FilterPortfolioBtnEnum } from "./models";
import { PortfolioCardComponent } from "./portfolio-card/portfolio-card.component";
import { TranslateModule } from "@ngx-translate/core";
import { IsTranslationLoadedService } from '../../core/services/is-translation-loaded.service';
import { LoaderComponent } from "../../components/loader/loader/loader.component";

@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
    imports: [
        PortfolioCardComponent,
        TranslateModule,
        LoaderComponent
    ]
})
export class PortfolioComponent {
  public isContentLoadedService = inject(IsTranslationLoadedService);
  public filterBtns = filterButtons;
  public selectedFilter = signal(this.filterBtns[0].value);

  public filteredPortfolioData = computed(() => {
    return portfolios.filter((portfolio) => this.selectedFilter() === FilterPortfolioBtnEnum.ALL ? true : portfolio.value === this.selectedFilter());
  })


  public onFilterPortfolio(value: string): void {
    this.selectedFilter.set(value);
  }
}
