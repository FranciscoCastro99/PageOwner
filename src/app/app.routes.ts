import { Routes } from '@angular/router';
import { HomeComponent } from './domains/home/home.component';
import { LabsComponent } from './domains/labs/labs.component';
import { MarketingComponent } from './domains/marketing/marketing.component';
import { ProgramacionComponent } from './domains/programacion/programacion.component';
import { AboutMeComponent } from './domains/about-me/about-me.component';
import { ProjectsComponent } from './domains/marketing/subPages/projects/projects.component';
import { ExperienceComponent } from './domains/marketing/subPages/experience/experience.component';
import { ContactMeComponent } from './domains/marketing/subPages/contact-me/contact-me.component';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'labs',
    component:LabsComponent
  },
  {
    path:'marketing',
    component: MarketingComponent,
    children:[
      {
        path:'',
        component:ProjectsComponent,
      },
      {
        path:'experience',
        component:ExperienceComponent,
      },
      {
        path:'contactMe',
        component:ContactMeComponent,
      },
    ]
  },
  {
    path:'Programer',
    component: ProgramacionComponent,
  },
  {
    path:'aboutMe',
    component: AboutMeComponent,
  },
];
