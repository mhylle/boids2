import {NgModule} from '@angular/core';
import {BoidComponent} from './boid/boid.component';
import {SharedModule} from '../../shared/shared.module';
import {BoidRoutingModule} from './boid-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { BoidEffects } from './store/effect/boid.effects';
import * as fromBoid from './store/reducer/boid.reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    BoidComponent
  ],
  imports: [
    SharedModule,
    BoidRoutingModule,
    StoreModule.forFeature(fromBoid.boidFeatureKey, fromBoid.boidReducer),
    EffectsModule.forFeature([BoidEffects])],
  exports: [],
  providers: []
})
export class BoidModule {
}
