import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicNoteComponent } from './components/music-note/music-note.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/music-note', pathMatch: 'full' },
  { path: 'music-note', component: MusicNoteComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
