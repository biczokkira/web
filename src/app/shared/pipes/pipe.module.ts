import { UpPipe } from './pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UpPipe],
  imports: [CommonModule],
  exports: [UpPipe],
  providers: [],
})
export class UpModule { }
