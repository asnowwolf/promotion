import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFormComponent } from './query-form.component';
import { SharedModule } from '../../_shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('QueryFormComponent', () => {
  let component: QueryFormComponent;
  let fixture: ComponentFixture<QueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        SharedModule,
      ],
      declarations: [QueryFormComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
