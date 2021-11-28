import {NgModule} from '@angular/core';
import {BoidComponent} from './boid/boid.component';
import {SharedModule} from '../../shared/shared.module';
import {BoidRoutingModule} from './boid-routing.module';

@NgModule({
  declarations: [
    BoidComponent
  ],
  imports: [SharedModule, BoidRoutingModule],
  exports: [],
  providers: []
})
export class BoidModule {
}
