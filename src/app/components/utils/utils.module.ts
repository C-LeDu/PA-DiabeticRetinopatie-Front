import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropZoneComponent} from './drop-zone/drop-zone.component';

@NgModule({
  declarations: [
    DropZoneComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropZoneComponent,
  ]
})
export class UtilsModule { }
