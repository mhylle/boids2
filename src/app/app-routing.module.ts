import {NgModule} from '@angular/core';

// add routing module
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

// setup routes
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'boids',
    loadChildren: () => import('./features/boids/boid.module').then(m => m.BoidModule)
  },
  {
    path: 'genes',
    loadChildren: () => import('./features/genes/gene.module').then(m => m.GeneModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


@NgModule(
  {
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {
}
