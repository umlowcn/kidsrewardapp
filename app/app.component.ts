import { Component } from '@angular/core';
import { RewardService } from './services/reward.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [RewardService]
})
export class AppComponent { }
