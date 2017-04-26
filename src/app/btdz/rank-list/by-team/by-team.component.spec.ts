import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTeamComponent } from './by-team.component';
import { BtdzInMemoryApiService } from '../../mock/btdz-in-memory-api.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { BtdzApi } from '../../_apis/btdz.api';

describe('ByTeamComponent', () => {
  let component: ByTeamComponent;
  let fixture: ComponentFixture<ByTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(BtdzInMemoryApiService),
      ],
      declarations: [ByTeamComponent],
      providers: [BtdzApi],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
