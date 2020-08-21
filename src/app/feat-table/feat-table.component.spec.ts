import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatTableComponent } from './feat-table.component';

describe('FeatTableComponent', () => {
  let component: FeatTableComponent;
  let fixture: ComponentFixture<FeatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
