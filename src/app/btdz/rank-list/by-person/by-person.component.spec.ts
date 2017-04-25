import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByPersonComponent } from './by-person.component';

describe('ByPersonComponent', () => {
  let component: ByPersonComponent;
  let fixture: ComponentFixture<ByPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
