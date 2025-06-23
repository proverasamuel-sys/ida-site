import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdaTeamComponent } from './ida-team.component';

describe('IdaTeamComponent', () => {
  let component: IdaTeamComponent;
  let fixture: ComponentFixture<IdaTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdaTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdaTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
