import { Component, computed, signal } from '@angular/core';
import {filterButtons, portfolios } from "./data";
import { FilterPortfolioBtnEnum } from "./models";
import { PortfolioCardComponent } from "./portfolio-card/portfolio-card.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-portfolio',
  standalone: true,
    imports: [
        PortfolioCardComponent,
        TranslateModule
    ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  public filterBtns = filterButtons;
  public selectedFilter = signal(this.filterBtns[0].value);
  public filteredPortfolioData = computed(() => {
    return portfolios.filter((portfolio) => this.selectedFilter() === FilterPortfolioBtnEnum.ALL ? true : portfolio.value === this.selectedFilter());
  })


  public onFilterPortfolio(value: string): void {
    this.selectedFilter.set(value);
  }
}
