import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule(
  {
    declarations: [],
    imports: [
      CommonModule,
      HttpClientModule,],
    exports: [
      CommonModule,
      HttpClientModule,],
    providers: [],
  }
)
export class SharedModule {

}
