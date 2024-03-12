import { Component } from '@angular/core';
import { MarketingModule } from "./marketing.module";
import { RouterOutlet } from '@angular/router';
import { NavbarMarketingComponent } from './components/navbar-marketing/navbar-marketing.component';



@Component({
    selector: 'app-marketing',
    standalone: true,
    templateUrl: 'marketing.component.html',
    styleUrl: './marketing.component.css',
    imports: [
      MarketingModule,
      RouterOutlet,
      NavbarMarketingComponent
    ]
})
export class MarketingComponent {

}
