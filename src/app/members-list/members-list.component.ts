import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss'],
  providers: [MemberService]
})

export class MembersListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailsPage(member) {
    this.router.navigate(['members', member.$key])
  }


}
