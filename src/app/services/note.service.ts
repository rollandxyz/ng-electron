import { Injectable } from "@angular/core";
import { TransposeService } from "./transpose.service";
import { TransposedRow } from "../models/transposed-row";

@Injectable()
export class NoteService {

  constructor(private transposeService: TransposeService) {}
  
  getSuperLowNotes(rows: TransposedRow[]) {
    for(let i=24; i>12; i--) {
      var dataRow = this.transposeOneScale(-1*i);
      rows.push(dataRow); 
    }
  }
  getLowNotes(rows: TransposedRow[]) {
    for(let i=12; i>0; i--) {
      var dataRow = this.transposeOneScale(-1*i);
      rows.push(dataRow); 
    }
  }
  getMiddleNotes(rows: TransposedRow[]) {
    for(let i=0; i<=12; i++) {
      var dataRow = this.transposeOneScale(i);
      rows.push(dataRow); 
    }
  }
  getHighNotes(rows: TransposedRow[]) {
    for(let i=12; i<=24; i++) {
      var dataRow = this.transposeOneScale(i);
      rows.push(dataRow); 
    }
  }
  getSuperHighNotes(rows: TransposedRow[]) {
    for(let i=24; i<=36; i++) {
      var dataRow = this.transposeOneScale(i);
      rows.push(dataRow); 
    }
  }
  getKeyValue(transposedRow:TransposedRow, key: string): string {
    switch(key) { 
      case "Moveable Notes": { 
        return transposedRow.toKeyC;
      } 
      case "C": { 
        return transposedRow.toKeyC;
      } 
      case "C#-Db": { 
        return transposedRow.toKeyCSharp;
      } 
      case "D": { 
        return transposedRow.toKeyD;
      } 
      case "D#-Eb": { 
        return transposedRow.toKeyDSharp; 
      } 
      case "E": { 
        return transposedRow.toKeyE;
      } 
      case "F": { 
        return transposedRow.toKeyF;
      }
      case "F#-Gb": { 
        return transposedRow.toKeyFSharp;
      }
      case "G": { 
        return transposedRow.toKeyG;
      }
      case "G#": { 
        return transposedRow.toKeyGSharp;
      }
      case "A": { 
        return transposedRow.toKeyA;
      }
      case "A#-Bb": { 
        return transposedRow.toKeyASharp;
      }
      case "B": { 
        return transposedRow.toKeyB;
      }
      default: { 
        return transposedRow.moveSemiTone.toString(); 
      } 
    } 
  }

  transposeOneScale(numOfSemiTone: number): TransposedRow {
    var data = {} as TransposedRow;
    data.moveSemiTone = numOfSemiTone;
    data.movableDoNote = this.transposeService.transposeFixDo("1", 0);
    data.toKeyC = this.transposeService.transposeFixDo("1", numOfSemiTone);
    data.toKeyCSharp = this.transposeService.transposeFixDo("1#", numOfSemiTone);
    data.toKeyD = this.transposeService.transposeFixDo("2", numOfSemiTone);
    data.toKeyDSharp = this.transposeService.transposeFixDo("2#", numOfSemiTone);
    data.toKeyE = this.transposeService.transposeFixDo("3", numOfSemiTone);
    data.toKeyF = this.transposeService.transposeFixDo("4", numOfSemiTone);
    data.toKeyFSharp = this.transposeService.transposeFixDo("4#", numOfSemiTone);
    data.toKeyG = this.transposeService.transposeFixDo("5", numOfSemiTone);
    data.toKeyGSharp = this.transposeService.transposeFixDo("5#", numOfSemiTone);
    data.toKeyA = this.transposeService.transposeFixDo("6", numOfSemiTone);
    data.toKeyASharp = this.transposeService.transposeFixDo("6#", numOfSemiTone);
    data.toKeyB = this.transposeService.transposeFixDo("7", numOfSemiTone);

    return data;    
  }
}