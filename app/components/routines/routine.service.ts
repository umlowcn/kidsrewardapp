import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class Routine {
    _id: string;
    behaviour: string;
    //behaviours: IBehaviour[];
    star: number;
    type: string;
}


@Injectable()
export class RoutineService {
    private selectedRoutine: Routine;

    constructor(private http: Http) { }

    getRoutines(): Observable<Routine[]> {
        return this.http.get('http://localhost:3000/api/rewards')
            .map(res => res.json());
    }
    getSelectedRoutine() {
        return this.selectedRoutine;
    }

    setSelectedRoutine(selectedRoutine: Routine) {
        this.selectedRoutine = selectedRoutine;
    }
}
