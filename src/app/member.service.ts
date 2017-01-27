import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from './member.model';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  getMemberById(memberId: string) {
    return this.angularFire.database.object('/members/' + memberId);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(localMember) {
    var firebaseMember = this.getMemberById(localMember.$key);
    firebaseMember.update({name: localMember.name,
                                bio: localMember.bio,
                                age: localMember.age,
                                rank: localMember.rank});
  }

  deleteMember(selectedMember) {
    var firebaseMember = this.getMemberById(selectedMember.$key);
    firebaseMember.remove();
  }
}
