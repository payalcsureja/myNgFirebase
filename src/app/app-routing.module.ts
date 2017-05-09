import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

// import { AuthGuard, CanDeactivateGuard, UserProfileService } from './core';
import { ErrorPageComponent } from './error-page/error-page.component';

/***************************************************************
* Lazy Loading to Eager Loading
*
* 1. Remove the module and NgModule imports in `app.module.ts`
*
* 2. Remove the lazy load route from `app.routing.ts`
*
* 3. Change the module's default route path from '' to 'pathname'
*****************************************************************/

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  // {
  //   path: 'admin',
  //   loadChildren: 'app/admin/admin.module#AdminModule',
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   canLoad: [AuthGuard],
  // },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  // { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'about' },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' }

  // { path: 'error-page', component: ErrorPageComponent, data: {message: 'Page not Found!'} },
  // { path: '**', pathMatch: 'full', redirectTo: '/error-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [
    // AuthGuard,
    // CanDeactivateGuard,
    // UserProfileService
  ]
})
export class AppRoutingModule { }