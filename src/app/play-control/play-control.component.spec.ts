import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayControlComponent } from './play-control.component';

describe('PlayControlComponent', () => {
  let component: PlayControlComponent;
  let fixture: ComponentFixture<PlayControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
