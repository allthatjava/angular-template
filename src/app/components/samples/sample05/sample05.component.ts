import { Component } from '@angular/core';
import { Service01Service } from '../../../services/samples/service01/service01.service'

@Component({
    selector: 'app-sample05',
    templateUrl: './sample05.component.html'
})
export class Sample05Component{
    users:string[];

    // Injected service - Service01Service can be used without initialization
    constructor(public service01:Service01Service)
    {
        this.users = service01.getUsers();
    }

}