import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-svg-video',
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.css'
})
export class SvgComponent {

  public empezar?:boolean;
  getStart():void{
    this.empezar= true;
  }


}
