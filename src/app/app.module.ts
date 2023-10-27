import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { MusicNoteComponent } from './components/music-note/music-note.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TransposeService } from './services/transpose.service';
import { NoteService } from './services/note.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    MusicNoteComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe
  ],
  providers: [
    DataService,
    TransposeService,
    NoteService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
