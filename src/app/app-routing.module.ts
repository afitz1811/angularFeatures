import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NestedExampleComponent } from './nested-example/nested-example.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'interpolation', component: InterpolationComponent},
  { path: 'properties', component: PropertybindingComponent},
  { path: 'events', component: EventBindingComponent},
  { path: 'nested', component: NestedExampleComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
