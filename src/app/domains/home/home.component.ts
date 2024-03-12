import { Component } from '@angular/core';
import { homeModule } from './home.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [homeModule, CommonModule],
})
export class HomeComponent {
  public empezar?:boolean;
  getStart():void{
    this.empezar= true;
  }

}
