import {NgModule} from '@angular/core';
import {BoidAdminComponent} from './boid-admin/boid-admin.component';
import {RouterModule, Routes} from '@angular/router';
import {BoidComponent} from './boid/boid.component';
import {BoidBoardComponent} from './boid-board/boid-board.component';

const routes: Routes = [
  {
    path: '', component: BoidComponent, children: [
      {path: 'admin', component: BoidAdminComponent},
      {path: 'board', component: BoidBoardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoidRoutingModule {

}
