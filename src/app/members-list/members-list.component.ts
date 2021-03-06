import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { RankPipe } from '../rank.pipe';

@Component({
  selector: 'members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss'],
  providers: [MemberService]
})

export class MembersListComponent implements OnInit {
  filterByRank: string = "allMembers";
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailsPage(member) {
    this.router.navigate(['members', member.$key])
  }

  onChange(menuOption) {
    this.filterByRank = menuOption;
  }
}
