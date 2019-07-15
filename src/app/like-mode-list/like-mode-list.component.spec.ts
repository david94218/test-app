import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeModeListComponent } from './like-mode-list.component';

describe('LikeModeListComponent', () => {
  let component: LikeModeListComponent;
  let fixture: ComponentFixture<LikeModeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeModeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeModeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
