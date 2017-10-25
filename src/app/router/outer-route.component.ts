import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-outer',
    template: `<p>Outer works!</p>`
})
export class OuterRouteComponent {
    @Input() id:string;

    
}