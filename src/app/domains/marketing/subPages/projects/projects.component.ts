import { Component } from '@angular/core';
import { ComponenteModule } from '../../components/componentes.module';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  imports:[
    ComponenteModule,
  ],
})
export class ProjectsComponent {


}




