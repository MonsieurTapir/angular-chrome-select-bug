import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitComponent } from './unit.component';



@NgModule({
  declarations: [UnitComponent],
  exports: [
    UnitComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UnitModule { }
