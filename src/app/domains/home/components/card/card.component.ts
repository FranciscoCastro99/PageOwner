import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  img = signal('../../../../../assets/img/Cool.jpg')
}
