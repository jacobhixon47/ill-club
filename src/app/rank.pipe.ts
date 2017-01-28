import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: "ranking",
  pure: false
})

export class RankPipe implements PipeTransform {


  transform(input: Member[], desiredRank) {
    var output: Member[] = [];
    if(desiredRank === "highRank") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].rank >= 25) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRank === "lowRank") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].rank <= 25) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
