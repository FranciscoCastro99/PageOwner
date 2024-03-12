import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { homeModule } from './domains/home/home.module';
import { MarketingModule } from './domains/marketing/marketing.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, homeModule, MarketingModule],
  template: '<router-outlet />',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'PaginaPropia';
  ngOnInit(): void {
    initFlowbite();
  }
}
