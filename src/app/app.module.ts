import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NestedExampleComponent } from './nested-example/nested-example.component';
import { NestedChildComponent } from './nested-child/nested-child.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { PipesComponent } from './pipes/pipes.component';
import { DataParentComponent } from './data-parent/data-parent.component';
import { DataChildComponent } from './data-child/data-child.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationComponent,
    NotfoundComponent,
    PropertybindingComponent,
    EventBindingComponent,
    NestedExampleComponent,
    NestedChildComponent,
    NgforComponent,
    ActivitiesComponent,
    NgswitchComponent,
    NgifComponent,
    NgclassComponent,
    NgstyleComponent,
    PipesComponent,
    DataParentComponent,
    DataChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
