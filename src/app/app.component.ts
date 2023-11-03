import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} 2023</div>`,
})
export class AppComponent {
  value = 'World';
}
