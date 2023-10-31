import { Injectable } from "@angular/core";

@Injectable()
export class TransposeService {
  constructor() {}
  
  public transposeFixDo(aNote:string, numOfSemiTone: number) {
    const A = ["1","1#","2","2#","3","4","4#","5","5#","6","6#","7"];
    const B = ["1","2$","2","3$","3","4","5$","5","6$","6","7$","7"];
    const M = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    const Mb = ['C','D$','D','E$','E','F','G$','G','A$','A','B$','B'];
    const replaceWith = "";
    const lowChar = ",";
    const highChar = "'";
    const maxLength = A.length;

    const note = aNote.split(lowChar).join(replaceWith).split(highChar).join(replaceWith);
    let up = this.countOccurrences(aNote, "'");
    let down = this.countOccurrences(aNote, ",");
    let nIndex = A.indexOf(note);
    if (nIndex < 0) {
      nIndex = B.indexOf(note);
    }
    if (nIndex < 0) {
      return 'Invalid note:' + note;
    }

    // major diff
    const dif = numOfSemiTone; 
    let pos = nIndex + dif;
    if (pos < 0) {
      let c = -1;
      while(pos<0) {
        c = c + 1;
        pos = pos + maxLength;
      }
      down = down + c;
    } 
    else {
      up = Math.floor(pos/maxLength) + up;      
    }
    pos =  pos % maxLength;
    const adjust = up - down;

    if (adjust < 0) {
      return A[pos] + ",".repeat(Math.abs(adjust));
    } else {
      return A[pos] + "'".repeat(adjust);
    }
  }

  private countOccurrences(str:string, letter:string) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == letter) {
        count += 1;
      }
    }
    return count;
  }
}
