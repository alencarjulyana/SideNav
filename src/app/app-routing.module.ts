
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
 
  { path: '', component: SidenavComponent},
];

export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
