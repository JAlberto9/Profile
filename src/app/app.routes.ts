import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ExperienceComponent } from './components/experience/experience.component';



const APP_ROUTES: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'proyects', component: ProyectsComponent },
    { path: 'Experience', component: ExperienceComponent }, 
    { path: '**', pathMatch: 'full', redirectTo: 'Experience' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
