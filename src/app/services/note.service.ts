import { Injectable } from "@angular/core";
import { TransposeService } from "./transpose.service";
import { TransposedRow } from "../models/transposed-row";
import { NoteScales } from  "../models/note-scale";
import { OctaveLevels } from  "../models/octave-level";


@Injectable()
export class NoteService {

  constructor(private transposeService: TransposeService) {}
  
  getNotes(rows: TransposedRow[], noteScale: NoteScales, octave: OctaveLevels) {
    for(let i=0; i<12; i++) {  
      let semi = i + octave;     
      if (octave < 0) {
        semi = -1*(i + Math.abs(octave));  
        console.log('semi', semi);
      }
      
      if (noteScale === NoteScales.TWELVENOTESCAL){
        var dataRow = this.transposeOneScale(semi);
        rows.push(dataRow);
      } else if (!this.isFlatSharp(semi)) {
        var dataRow = this.transposeOneScale(semi);
        rows.push(dataRow);
      }       
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
    data.toKeyD = this.transposeService.transposeFixDo("2", numOfSemiTone);    
    data.toKeyE = this.transposeService.transposeFixDo("3", numOfSemiTone);
    data.toKeyF = this.transposeService.transposeFixDo("4", numOfSemiTone);    
    data.toKeyG = this.transposeService.transposeFixDo("5", numOfSemiTone);    
    data.toKeyA = this.transposeService.transposeFixDo("6", numOfSemiTone);    
    data.toKeyB = this.transposeService.transposeFixDo("7", numOfSemiTone);
    
    data.toKeyCSharp = this.transposeService.transposeFixDo("1#", numOfSemiTone);
    data.toKeyDSharp = this.transposeService.transposeFixDo("2#", numOfSemiTone);
    data.toKeyFSharp = this.transposeService.transposeFixDo("4#", numOfSemiTone);
    data.toKeyGSharp = this.transposeService.transposeFixDo("5#", numOfSemiTone);
    data.toKeyASharp = this.transposeService.transposeFixDo("6#", numOfSemiTone);

    return data;    
  }

  isFlatSharp(moveSemiTone: number){
    return !(moveSemiTone === 0  
    || moveSemiTone === 2 
    || moveSemiTone === 4
    || moveSemiTone === 5
    || moveSemiTone === 7
    || moveSemiTone === 9
    || moveSemiTone === 11
    || moveSemiTone === 12
    || moveSemiTone === -12
    || moveSemiTone === -14
    || moveSemiTone === -16
    || moveSemiTone === -17
    || moveSemiTone === -19
    || moveSemiTone === -21
    || moveSemiTone === -23
    || moveSemiTone === -24
    || moveSemiTone === -26
    || moveSemiTone === -28
    || moveSemiTone === -29
    || moveSemiTone === -31
    || moveSemiTone === -33
    || moveSemiTone === -35
    || moveSemiTone === 14
    || moveSemiTone === 16
    || moveSemiTone === 17
    || moveSemiTone === 19
    || moveSemiTone === 21
    || moveSemiTone === 23
    || moveSemiTone === 24
    || moveSemiTone === 26
    || moveSemiTone === 28
    || moveSemiTone === 29
    || moveSemiTone === 31
    || moveSemiTone === 33
    || moveSemiTone === 35
    || moveSemiTone === 36)
  }
}