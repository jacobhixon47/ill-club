import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;
  memberId: string;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private memberService: MemberService) { }

  ngOnInit() {
    // this.route.params.forEach((urlParameters) => {
    //   this.memberId = urlParameters['id'];
    // });
    // this.member = this.memberService.getMemberById(this.memberId);
  }

  updateMember(selectedMember) {
    this.memberService.updateMember(selectedMember);
  }

  deleteMember(selectedMember) {
    if(confirm("Are you sure you want to delete this member?")){
      this.memberService.deleteMember(selectedMember);
    }
  }
}
