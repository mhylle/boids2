import {NgModule} from '@angular/core';
import {GeneComponent} from './gene/gene.component';
import {SharedModule} from '../../shared/shared.module';
import { GeneAdminComponent } from './gene-admin/gene-admin.component';
import {GeneRoutingModule} from './gene-routing.module';

@NgModule(
  {
    declarations: [
      GeneComponent,
      GeneAdminComponent
    ],
    imports: [SharedModule, GeneRoutingModule],
    exports: [],
    providers: [],
  }
)
export class GeneModule {

}
