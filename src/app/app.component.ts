import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
    template: `
        <button class="btn btn-primary">Le button</button>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'linter-test-project';
}
