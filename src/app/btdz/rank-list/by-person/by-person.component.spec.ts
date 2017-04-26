import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByPersonComponent } from './by-person.component';
import { BtdzStubApi } from 'app/_stub/btdz-stub-api';
import { BtdzApi } from '../../_apis/btdz.api';

describe('ByPersonComponent', () => {
  let component: ByPersonComponent;
  let fixture: ComponentFixture<ByPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ByPersonComponent],
      providers: [{provide: BtdzApi, useClass: BtdzStubApi}],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByPersonComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get bonus by person', () => {
    expect(component.items).toEqual([
      {
        'bonus': 10280.00,
        'maxBonus': 11420.00,
        'memName': '杜王泺',
        'rankNo': 1,
        'teamName': '杭州分行本部',
      },
    ]);
  });
});
