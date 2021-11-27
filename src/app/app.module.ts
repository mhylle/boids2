import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoidComponent } from './features/boids/boid/boid.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { BoidBoardComponent } from './features/boids/boid-board/boid-board.component';
import { NumberPipe } from './shared/pipes/number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoidComponent,
    BoidBoardComponent,
    NumberPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
