import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAreaComponent } from './by-area.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BtdzInMemoryApiService } from '../../mock/btdz-in-memory-api.service';
import { BtdzApi } from '../../_apis/btdz.api';
import { HttpModule } from '@angular/http';

describe('ByAreaComponent', () => {
  let component: ByAreaComponent;
  let fixture: ComponentFixture<ByAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(BtdzInMemoryApiService),
      ],
      declarations: [ByAreaComponent],
      providers: [BtdzApi],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByAreaComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should binding properly', async((done) => {
    fixture.whenStable().then(() => {
      const element: HTMLElement = fixture.debugElement.nativeElement;
      const tr = element.querySelector('tbody>tr');
      expect(tr.querySelector('td:nth-child(1)').textContent).toEqual('1');
      expect(tr.querySelector('td:nth-child(2)').textContent).toEqual('Test');
      expect(tr.querySelector('td:nth-child(3)').textContent).toEqual('1,000.13');
      expect(tr.querySelector('td:nth-child(4)').textContent).toEqual('10,000');
      expect(tr.querySelector('td:nth-child(5)').textContent).toEqual('10');
      done();
    });
  }));
});
