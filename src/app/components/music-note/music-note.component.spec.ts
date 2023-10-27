import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicNoteComponent } from './music-note.component';

describe('MusicNoteComponent', () => {
  let component: MusicNoteComponent;
  let fixture: ComponentFixture<MusicNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
