import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { QueryFormComponent } from '../query-form/query-form.component';
import { RankListComponent } from '../rank-list/rank-list.component';
import { ByPersonComponent } from '../rank-list/by-person/by-person.component';
import { ByTeamComponent } from '../rank-list/by-team/by-team.component';
import { ByAreaComponent } from '../rank-list/by-area/by-area.component';
import { MdButtonModule, MdCoreModule, MdInputModule, MdTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdInputModule,
        MdButtonModule,
        MdTabsModule,
        MdCoreModule,
        RouterModule,
      ],
      declarations: [
        HomeComponent,
        HeaderComponent,
        QueryFormComponent,
        RankListComponent,
        ByPersonComponent,
        ByTeamComponent,
        ByAreaComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
