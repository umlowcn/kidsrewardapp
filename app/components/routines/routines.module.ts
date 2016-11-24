import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { RoutineListComponent }    from './routine-list.component';
import { RoutineDetailComponent }  from './routine-detail.component';
import { RoutineService } from './routine.service';
import { RoutineRoutingModule } from './routines-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoutineRoutingModule
  ],
  declarations: [
    RoutineListComponent,
    RoutineDetailComponent
  ],
  providers: [
    RoutineService
  ]
})

export class RoutinesModule {}