import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ByAreaComponent } from './by-area.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BtdzInMemoryApiService } from '../../mock/btdz-in-memory-api.service';
import { BtdzApi } from '../../_apis/btdz.api';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';

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
  it('should binding properly', (done) => {
    const element = fixture.debugElement;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const tds = element.queryAll(By.css('tbody>tr>td'));
      expect(tds[0].nativeElement.textContent).toEqual('1');
      expect(tds[1].nativeElement.textContent).toEqual('南京分行');
      expect(tds[2].nativeElement.textContent).toEqual('217,700');
      expect(tds[3].nativeElement.textContent).toEqual('236,380');
      expect(tds[4].nativeElement.textContent).toEqual('228.92');
      done();
    });
  });
});
