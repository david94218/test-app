import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefineFolderComponent } from './user-define-folder.component';

describe('UserDefineFolderComponent', () => {
  let component: UserDefineFolderComponent;
  let fixture: ComponentFixture<UserDefineFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDefineFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDefineFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
