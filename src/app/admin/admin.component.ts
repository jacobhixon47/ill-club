import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, bio: string, age: number, rank: number) {
    var newMember = new Member(name, bio, age, rank);
    this.memberService.addMember(newMember);
  }
}
