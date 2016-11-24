import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IReward } from '../interfaces/reward';

import 'rxjs/add/operator/map';

@Injectable()
export class RewardService {
    private dataStore: {
        rewards: IReward[]
    };

    constructor(private http: Http) {
        this.dataStore = {
            rewards: []
        };
    }

    loadAll() {
        this.http.get('http://localhost:3000/api/rewards')
            .map(res => res.json())
            .subscribe(data => {
                this.dataStore.rewards = data;
                console.log("this.dataStore.rewards :" + this.dataStore.rewards );
                this.dataStore.rewards.forEach(item => { console.log(item.type)});
            });            
    }

    getRewards(): Observable<IReward[]> {
        return this.http.get('http://localhost:3000/api/rewards')
            .map(res => res.json());
    }

    getReward(routine: string) {
        return this.dataStore.rewards.filter(reward => reward.type === routine);
        //return this.getRewards().map(rewards => 
        //{ 
        //    return rewards.filter(reward => reward.type === routine)[0] 
        //});


    }

}
