import { MatTableDataSource } from '@angular/material/table';
import { Component } from '@angular/core';
import { rowsAnimation } from './../../animations/template.animations';
import { TransposedRow } from './../../models/transposed-row';
import { NoteService } from './../../services/note.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-music-note',
  templateUrl: './music-note.component.html',
  styleUrls: ['./music-note.component.scss'],
  animations: [rowsAnimation],
})
export class MusicNoteComponent {
  transposedNotes: string[] = [];

  displayedColumns = ['Move SemiTone', 'Moveable Notes', 'C', 'C#-Db', 'D', 'D#-Eb', 'E', 'F', 'F#-Gb', 'G', 'G#-Ab', 'A', 'A#-Bb', 'B'];
  dataSource: MatTableDataSource<TransposedRow>;
  transposedRows: TransposedRow[] = [];

  typeOfNotes = this._formBuilder.group({
    lowNotes: false,
    superLowNotes: false,
    middleNotes: true,
    highNotes: false,
    superHighNotes: false
  });

  constructor(private noteService: NoteService, private _formBuilder: FormBuilder) {
    this.noteService.getMiddleNotes(this.transposedRows);
    // Assign the data to the data source for the table to render.
    this.dataSource = new MatTableDataSource(this.transposedRows);
  }
  
  typeOfNoteChanged() {
    this.transposedRows = [];
    if (this.typeOfNotes.value.superHighNotes) {
      this.noteService.getSuperHighNotes(this.transposedRows);
    }

    if (this.typeOfNotes.value.highNotes) {
      this.noteService.getHighNotes(this.transposedRows);
    }

    if (this.typeOfNotes.value.middleNotes) {
      this.noteService.getMiddleNotes(this.transposedRows);
    }

    if (this.typeOfNotes.value.lowNotes) {
      this.noteService.getLowNotes(this.transposedRows);
    }
    if (this.typeOfNotes.value.superLowNotes) {
      this.noteService.getSuperLowNotes(this.transposedRows);
    }
    this.dataSource = new MatTableDataSource(this.transposedRows);
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
