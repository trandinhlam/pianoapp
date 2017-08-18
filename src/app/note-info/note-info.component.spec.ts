import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteInfoComponent } from './note-info.component';

describe('NoteInfoComponent', () => {
  let component: NoteInfoComponent;
  let fixture: ComponentFixture<NoteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
