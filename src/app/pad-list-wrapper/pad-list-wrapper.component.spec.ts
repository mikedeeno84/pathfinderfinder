import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadListWrapperComponent } from './pad-list-wrapper.component';

describe('PadListWrapperComponent', () => {
  let component: PadListWrapperComponent;
  let fixture: ComponentFixture<PadListWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadListWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
