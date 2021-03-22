import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMemComponent } from './show-mem.component';

describe('ShowMemComponent', () => {
  let component: ShowMemComponent;
  let fixture: ComponentFixture<ShowMemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
