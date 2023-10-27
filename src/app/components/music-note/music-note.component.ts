import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { rowsAnimation } from './../../animations/template.animations';
import { TransposedRow } from './../../models/transposed-row';
import { NoteService } from './../../services/note.service';


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

  constructor(private noteService: NoteService) {
    const transposedRows: TransposedRow[] = [];
    //this.getSuperLowNotes(transposedRows);
    //this.getLowNotes(transposedRows);
    this.noteService.getMiddleNotes(transposedRows);

    // Assign the data to the data source for the table to render.
    this.dataSource = new MatTableDataSource(transposedRows);
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
