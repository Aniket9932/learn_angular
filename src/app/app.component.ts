import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  memberName: string = '';
  members: Array<string> = [];

  onInput(event: any) {
    this.memberName = event.target.value;
  }

  addMember() {
    this.members.push(this.memberName);
    console.log('Member added', this.members);
  }
}
