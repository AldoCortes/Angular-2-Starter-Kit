import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'team',
  template: require('../views/team.html')
})

export class TeamComponent implements OnInit {
  boxSize: any;
  teamMember: any;
  members: Array;
  ngOnInit() {
    this.members = document.getElementsByClassName('team');
    this.teamMember = document.getElementsByClassName('team-member-holder');
    this.calculatePositions();
  }
  onResize() {
    this.calculatePositions();
  }

  calculatePositions() {
    this.boxSize = this.teamMember[0].offsetWidth;
    console.log(this.boxSize);
    if (this.boxSize > 300) {
      this.boxSize = 300;
    }
    for (let i = 0; i < this.members.length; i++) {
      const parent = this.members[i];
      const back = parent.getElementsByClassName('team-member-background');
      const desc = parent.getElementsByClassName('team-description')[0];
      const height = desc.offsetHeight;
      const calcMT = (Math.floor((this.boxSize - height) / 2)).toString().concat('px');
      if (height > 160) {
        desc.style.marginTop = calcMT;
        for (let k = 0; k < back.length; k++) {
          back[k].style.height = height.toString().concat('px');
          back[k].style.top = calcMT;
        }
      } else {
        desc.style.marginTop = '30px';
        for (let j = 0; j < back.length; j++) {
          back[j].style.height = 0;
        }
      }
    }
  }
}
