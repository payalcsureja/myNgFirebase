import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PortfolioRoutingModule, routedComponents } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  imports: [
    SharedModule,
    PortfolioRoutingModule
  ],
  exports: [
    [PortfolioComponent]
  ],
  declarations: [
    PortfolioComponent,
    routedComponents
  ]
})
export class PortfolioModule { }