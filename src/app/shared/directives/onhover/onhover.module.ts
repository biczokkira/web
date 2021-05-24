import { OnHoverDirective } from './onhover.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OnHoverDirective],
  imports: [CommonModule],
  exports: [OnHoverDirective]
})
export class OnHoverModule { }
