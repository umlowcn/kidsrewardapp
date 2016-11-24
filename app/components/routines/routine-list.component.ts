import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Routine, RoutineService } from './routine.service';

@Component({
    moduleId: module.id,
    templateUrl: 'routine-list.component.html'
})

export class RoutineListComponent implements OnInit {
    routines: Routine[];
    private selectedId: string;

    constructor(
        private service: RoutineService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    getRoutines() {
        return this.service.getRoutines()
            .subscribe((data: Routine[]) => {
                this.routines = data
            });
    }

    ngOnInit(): void {
        this.getRoutines();
    }
    
    isSelected(routine: Routine) { return routine._id === this.selectedId; }

    onSelect(routine: Routine) {
        this.service.setSelectedRoutine(routine);
        this.router.navigate(['/routine', routine._id]);
    }
}