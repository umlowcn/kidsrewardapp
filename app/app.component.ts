import { Component } from '@angular/core';
import { RewardService } from './services/reward.service';
import { AuthService }  from './auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [RewardService, AuthService]
})

export class AppComponent { 
    constructor(private auth: AuthService) {}
}
