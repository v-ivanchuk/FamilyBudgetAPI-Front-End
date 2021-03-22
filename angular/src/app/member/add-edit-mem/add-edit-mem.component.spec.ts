import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMemComponent } from './add-edit-mem.component';

describe('AddEditMemComponent', () => {
  let component: AddEditMemComponent;
  let fixture: ComponentFixture<AddEditMemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
