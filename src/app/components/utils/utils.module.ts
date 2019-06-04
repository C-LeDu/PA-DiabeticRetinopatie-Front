import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropZoneComponent} from './drop-zone/drop-zone.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    DropZoneComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    DropZoneComponent,
  ]
})
export class UtilsModule { }
