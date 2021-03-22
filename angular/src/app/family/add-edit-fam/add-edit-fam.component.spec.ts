import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFamComponent } from './add-edit-fam.component';

describe('AddEditFamComponent', () => {
  let component: AddEditFamComponent;
  let fixture: ComponentFixture<AddEditFamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
