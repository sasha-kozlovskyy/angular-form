import { Component } from '@angular/core';

export type EditorType = 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'profile';

  get showProfileEditor() {
    return this.editor === 'profile';
  }
}
