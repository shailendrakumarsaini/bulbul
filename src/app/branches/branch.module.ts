import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatebranchComponent } from './createbranch/createbranch.component';
import { BrancheslistComponent } from './brancheslist/brancheslist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    component: CreatebranchComponent
  },
  {
    path: 'branchlist',
    component: BrancheslistComponent
  }
];

@NgModule({
  declarations: [CreatebranchComponent, BrancheslistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BranchModule { }
