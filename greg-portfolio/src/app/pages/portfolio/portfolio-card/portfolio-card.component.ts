import { Component, input } from '@angular/core';
import { PortfolioInterface } from "../models";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss'
})
export class PortfolioCardComponent {
  public portfolio = input.required<PortfolioInterface>();
}
