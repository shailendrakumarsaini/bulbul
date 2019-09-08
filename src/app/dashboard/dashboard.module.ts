import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchadminComponent } from './branchadmin/branchadmin.component';
import { SchooladminComponent } from './schooladmin/schooladmin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { SidepanelComponent } from '../shared/layout/sidepanel/sidepanel.component';
import { FooterComponent } from '../shared/layout/footer/footer.component';

const routes: Routes = [{
  path: 'admindashboard',
  component: BranchadminComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'schooldashboard',
  component: SchooladminComponent
}
];

@NgModule({

  declarations: [BranchadminComponent, SchooladminComponent, DashboardComponent, HeaderComponent, SidepanelComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule
  ]
})
export class DashboardModule { }
