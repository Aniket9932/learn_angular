import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  memberName: string = '';
  members: Array<string> = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';
  teams: Array<Array<string>> = [];

  onInput(event: any) {
    this.memberName = event.target.value;
  }

  onNumberOfTeamsInput(event: any) {
    this.numberOfTeams = Number(event.target.value);
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Invalid number of teams';
      return;
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough teams members to generate';
      return;
    }

    this.errorMessage = '';

    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let team = 0; team < this.numberOfTeams; team++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);

        const member = allMembers.splice(randomIndex, 1)[0];

        if (!member) break;

        if (this.teams[team]) {
          this.teams[team].push(member);
        } else {
          this.teams[team] = [member];
        }
      }
    }

    this.members = [];
    this.numberOfTeams = '';
  }

  addMember() {
    if (!this.memberName) {
      this.errorMessage = 'Name must be provided';
      return;
    }
    this.errorMessage = '';
    this.members.push(this.memberName);
    this.memberName = '';
  }
}
