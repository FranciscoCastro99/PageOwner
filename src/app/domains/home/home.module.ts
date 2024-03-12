import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SvgComponent } from "./components/svg/svg.component";
import { CardComponent } from "./components/card/card.component";



@NgModule({
  declarations:[
    NavbarComponent,
    SvgComponent,
    CardComponent,
  ],
  imports:[
    CommonModule,
    MatIconModule,
  ],
  exports:[
    NavbarComponent,
    SvgComponent,
    CardComponent,

  ],
})


export class homeModule {

};


