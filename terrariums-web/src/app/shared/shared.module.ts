import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule, NavbarModule } from 'angular-bootstrap-md';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    MDBBootstrapModule.forRoot(),
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    MDBBootstrapModule,
    NavbarModule,
    FlexLayoutModule
    ]
})
export class SharedModule { }
