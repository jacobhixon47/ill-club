import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
  providers: [MemberService]
})
export class MemberDetailComponent implements OnInit {
  memberId: string;
  member;

  constructor(private route: ActivatedRoute, private location: Location, private memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.member = this.memberService.getMemberById(this.memberId);
  }
}
