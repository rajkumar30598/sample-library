import { NgModule } from '@angular/core';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';

@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
  ],
  exports: [
    SampleComponent,
    SampleRoutingModule
  ]
})
export class SampleModule { }
