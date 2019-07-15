import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumModeListComponent } from './album-mode-list.component';

describe('AlbumModeListComponent', () => {
  let component: AlbumModeListComponent;
  let fixture: ComponentFixture<AlbumModeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumModeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumModeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
