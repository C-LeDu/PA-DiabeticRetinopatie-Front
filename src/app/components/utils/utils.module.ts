import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropZoneComponent} from './drop-zone/drop-zone.component';
import {MatButtonModule} from '@angular/material';
import {ResultDisplayComponent} from './result-display/result-display.component';

@NgModule({
  declarations: [
    DropZoneComponent,
    ResultDisplayComponent,
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
