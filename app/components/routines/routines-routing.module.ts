import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutineListComponent }    from './routine-list.component';
import { RoutineDetailComponent }  from './routine-detail.component';
import { AuthGuard } from '../../auth/auth.guard';

const RoutinesRoutes: Routes = [
  { path: 'routines',  component: RoutineListComponent, canActivate: [AuthGuard] },
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