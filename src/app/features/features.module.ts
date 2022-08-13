import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';
import { HomeComponent } from './views/home/home.component';
import { FormFieldComponent } from '../components/form-field/form-field.component';
import { BpInputComponent } from '../components/bp-input/bp-input.component';


@NgModule({
  declarations: [
    CustomButtonComponent,
    HomeComponent,
    FormFieldComponent,
    BpInputComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
