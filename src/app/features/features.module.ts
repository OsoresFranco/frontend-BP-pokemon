import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [
    CustomButtonComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
