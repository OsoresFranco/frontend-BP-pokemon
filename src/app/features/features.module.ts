import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';
import { HomeComponent } from './views/home/home.component';
import { FormFieldComponent } from '../components/form-field/form-field.component';


@NgModule({
  declarations: [
    CustomButtonComponent,
    HomeComponent,
    FormFieldComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
