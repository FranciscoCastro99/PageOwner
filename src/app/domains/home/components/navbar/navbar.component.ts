import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  img = signal("../../../assets/img/Logotipo.png");

  public desplegar?:boolean;

  abrirMenu(){
    this.desplegar= !this.desplegar;
  }



}
