import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NestedExampleComponent } from './nested-example/nested-example.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'interpolation', component: InterpolationComponent},
  { path: 'properties', component: PropertybindingComponent},
  { path: 'events', component: EventBindingComponent},
  { path: 'nested', component: NestedExampleComponent},
  { path: 'ngfor', component: NgforComponent},
  { path: 'ngswitch', component: NgswitchComponent},
  { path: 'ngif', component: NgifComponent},
  { path: 'ngclass', component: NgclassComponent},
  { path: 'ngstyle', component: NgstyleComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'activities', component: ActivitiesComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
