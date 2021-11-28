import {GeneComponent} from './gene/gene.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GeneAdminComponent} from './gene-admin/gene-admin.component';

const routes: Routes = [
  {
    path: '', component: GeneComponent, children: [
      {path: '', component: GeneAdminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneRoutingModule {

}
