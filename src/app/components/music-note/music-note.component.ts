import { MatTableDataSource } from '@angular/material/table';
import { Component } from '@angular/core';
import { rowsAnimation } from './../../animations/template.animations';
import { TransposedRow } from './../../models/transposed-row';
import { NoteService } from './../../services/note.service';
import { FormBuilder } from '@angular/forms';
import { NoteScales } from  './../../models/note-scale';
import { OctaveLevels } from  './../../models/octave-level';


@Component({
  selector: 'app-music-note',
  templateUrl: './music-note.component.html',
  styleUrls: ['./music-note.component.scss'],
  animations: [rowsAnimation],
})
export class MusicNoteComponent {
  noteScales =  Object.keys(NoteScales);
  transposedNotes: string[] = [];

  displayedColumns = [
    'Move SemiTone', 'Moveable Notes',
   'C', 'C#-Db', 'D', 'D#-Eb', 'E', 'F', 'F#-Gb', 'G', 'G#-Ab', 'A', 'A#-Bb', 'B'];
  dataSource: MatTableDataSource<TransposedRow>;
  transposedRows: TransposedRow[] = [];
  typeOfNotes = this._formBuilder.group({
    superLowNotes: false,
    lowNotes: false,
    middleNotes: true,
    highNotes: false,
    superHighNotes: false
  });  
  noteScale: NoteScales = NoteScales.TWELVENOTESCAL;
  
  constructor(private noteService: NoteService, private _formBuilder: FormBuilder) {
    this. typeOfNoteChanged();
    this.dataSource = new MatTableDataSource(this.transposedRows);
  }

  typeOfNoteChanged() {
    this.transposedRows = [];
    if (this.typeOfNotes.value.superLowNotes) {
      this.noteService.getLowNotes(this.transposedRows, this.noteScale, OctaveLevels.SUPERLOW);
    }
    if (this.typeOfNotes.value.lowNotes) {
      this.noteService.getLowNotes(this.transposedRows, this.noteScale, OctaveLevels.LOW);
    }
    if (this.typeOfNotes.value.middleNotes) {
      this.noteService.getNotes(this.transposedRows, this.noteScale, OctaveLevels.MIDDLE);
    }
    if (this.typeOfNotes.value.highNotes) {
      this.noteService.getNotes(this.transposedRows, this.noteScale, OctaveLevels.HIGH);
    }
    if (this.typeOfNotes.value.superHighNotes) {
      this.noteService.getNotes(this.transposedRows, this.noteScale, OctaveLevels.SUPERHIGH);
    }  
    this.dataSource = new MatTableDataSource(this.transposedRows);
  }

  getMajorColor(row:TransposedRow):boolean {
    return row.moveSemiTone === 0 
        || row.moveSemiTone === 2
        || row.moveSemiTone === 4
        || row.moveSemiTone === 5
        || row.moveSemiTone === 7
        || row.moveSemiTone === 9
        || row.moveSemiTone === 11
        || row.moveSemiTone === 12
        || row.moveSemiTone === -12
        || row.moveSemiTone === -14
        || row.moveSemiTone === -16
        || row.moveSemiTone === -17
        || row.moveSemiTone === -19
        || row.moveSemiTone === -21
        || row.moveSemiTone === -23
        || row.moveSemiTone === -24
        || row.moveSemiTone === -26
        || row.moveSemiTone === -28
        || row.moveSemiTone === -29
        || row.moveSemiTone === -31
        || row.moveSemiTone === -33
        || row.moveSemiTone === -35
        || row.moveSemiTone === 14
        || row.moveSemiTone === 16
        || row.moveSemiTone === 17
        || row.moveSemiTone === 19
        || row.moveSemiTone === 21
        || row.moveSemiTone === 23
        || row.moveSemiTone === 24
        || row.moveSemiTone === 26
        || row.moveSemiTone === 28
        || row.moveSemiTone === 29
        || row.moveSemiTone === 31
        || row.moveSemiTone === 33
        || row.moveSemiTone === 35
        || row.moveSemiTone === 36
  }
  getColumnTooltipText(column: string): string {
    return(column === 'Move SemiTone' || column === 'Moveable Notes') ? '' : `${column} Major Note Played with C Key Harmonica`;
  }

  getRowTooltipText(row:TransposedRow): string {
    return row.toKeyA;
  }
  getKeyValue(row:TransposedRow, key:string): string {
    return this.noteService.getKeyValue(row, key);
  }
}
