import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponenteModule } from './components/componentes.module';
import { NavbarMarketingComponent } from './components/navbar-marketing/navbar-marketing.component';




@NgModule({
    declarations: [

    ],
    exports: [

    ],
    imports: [
        CommonModule,
        ComponenteModule,
    ]
})
export class MarketingModule { }
