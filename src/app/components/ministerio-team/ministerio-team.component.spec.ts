import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterioTeamComponent } from './ministerio-team.component';

describe('MinisterioTeamComponent', () => {
  let component: MinisterioTeamComponent;
  let fixture: ComponentFixture<MinisterioTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinisterioTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinisterioTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
