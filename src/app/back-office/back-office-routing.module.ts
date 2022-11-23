import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from './back/back.component';
import { ContentComponent } from './content/content.component';
import { NavBareComponent } from './nav-bare/nav-bare.component';
import { SideBareComponent } from './side-bare/side-bare.component';

const routes: Routes = [
  {path:'', component: BackComponent},
  {path:'', component: ContentComponent},
  {path:'', component: NavBareComponent},
  {path:'', component: SideBareComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
