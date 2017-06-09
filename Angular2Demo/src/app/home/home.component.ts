import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    template: `<h1>Hello {{home}}</h1>`,
})
export class HomeComponent {
    home = 'it works!';
}


