import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByPersonComponent } from './by-person.component';
import { BtdzInMemoryApiService } from '../../mock/btdz-in-memory-api.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { BtdzApi } from '../../_apis/btdz.api';

describe('ByPersonComponent', () => {
  let component: ByPersonComponent;
  let fixture: ComponentFixture<ByPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(BtdzInMemoryApiService),
      ],
      declarations: [ByPersonComponent],
      providers: [BtdzApi],
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
