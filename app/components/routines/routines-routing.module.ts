import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutineListComponent }    from './routine-list.component';
import { RoutineDetailComponent }  from './routine-detail.component';

const RoutinesRoutes: Routes = [
  { path: 'routines',  component: RoutineListComponent },
  { path: 'routine/:id', component: RoutineDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(RoutinesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutineRoutingModule { }